'use strict'

const Register = use('App/Models/Register')

class AdminController {
  async loadAdminPage({ view }) {
    const registers = await Register
      .query()
      .orderBy('id', 'desc')
      .fetch()
    
    return view.render('pages/admin', { registers: registers.toJSON() });
  }
}

module.exports = AdminController
