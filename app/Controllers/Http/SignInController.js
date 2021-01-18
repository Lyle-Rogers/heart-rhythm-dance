'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class SignInController {
  async signIn({ response, auth, request, session }) {
    const { username, password, remember_me } = request.all();
    
    const user = await User.query()
      .where('username', username)
      .first()

    if (user) {
      const verification = await Hash.verify(password, user.password)

      if (verification) {
        await auth.remember(!!remember_me).login(user)

        return response.route('/blog')
      } else {
        session.flash({ message: "Your password was incorrect. Please try again." })

        return response.redirect('back')
      }
    }
    session.flash({ message: "Couldn't find your username. Please check to see if it's correct or contact us for help." })

    return response.redirect('back')
  }

  async register({ response, request, auth }) {
    const user = await User.create(request.only(['username', 'password']));

    await user.save();

    const rememberMe = request.remember_me;

    await auth.remember(!!rememberMe).login(user);

    return response.route('/blog')
  }
}

module.exports = SignInController
