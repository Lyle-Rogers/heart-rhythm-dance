'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class SignInController {
  async login({ response, auth, request, session }) {
    const password = request.all().password;

    const user = await User.findBy('id', 1);

    const passwordVerified = await Hash.verify(password, user.password)

    if (passwordVerified) {
      await auth.remember(true).login(user)
    } else {
      session.flash({
          notification: {
              message: 'Wrong password, please try again.'
          }
      })

      return response.redirect('back')
    }

    return response.route('/')
  }
}

module.exports = SignInController
