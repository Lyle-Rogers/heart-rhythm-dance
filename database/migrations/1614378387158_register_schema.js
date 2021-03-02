'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.table('registers', (table) => {
      table.string('payments', 13000).alter()
    })
  }

  down () {
    this.table('registers', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RegisterSchema
