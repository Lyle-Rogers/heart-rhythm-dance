'use strict'

class Blog {
  get rules () {
    return {
      'blog_message': 'required'
    }
  }

  get messages () {
    return {
      'required': 'You must fill in the blog field to continue.',
    }
  }

  async fails (error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = Blog
