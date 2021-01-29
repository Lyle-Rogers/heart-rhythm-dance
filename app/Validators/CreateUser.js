'use strict'

class CreateUser {
  get rules () {
    return {
      'username': 'required|unique:users',
      'password': 'required|confirmed'
    }
  }

  get messages () {
    return {
      'required': 'You must fill in the {{ field }} field to continue.',
      'unique': "I'm sorry, but someone is already using that username. Please try again with a difrent username.",
      'confirmed': "Your password is not confirmed. The confirmation field may be incorrect, please check."
    }
  }

  async fails (error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser
