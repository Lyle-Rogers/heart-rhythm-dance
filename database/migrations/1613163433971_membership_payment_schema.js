'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MembershipPaymentSchema extends Schema {
  up () {
    this.table('membership_payments', (table) => {
      table.integer('register_id').alter()
    })
  }

  down () {
    this.table('membership_payments', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MembershipPaymentSchema
