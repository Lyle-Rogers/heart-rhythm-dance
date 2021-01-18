'use strict'

class BlogComments {
  get rules () {
    return {
      'blog_comment': 'required'
    }
  }

  get messages () {
    return {
      'required': 'You must fill in the comment field to continue.',
    }
  }

  async fails (error) {
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = BlogComments
