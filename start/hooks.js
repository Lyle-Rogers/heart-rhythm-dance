'use strict'

const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')

  Exception.handle('InvalidSessionException', ( error, { response }) => {
    return response.redirect('/sign_in')
  })
})

hooks.after.providersBooted(() => {
  const View = use('View')

  View.global('thisMonth', () => {
    return moment().format('MMMM')
  })
})

