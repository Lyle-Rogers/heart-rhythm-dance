'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MembershipPaymentSchema extends Schema {
  up () {
    this.create('membership_payments', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('style')
      table.string('time_payed')
      table.timestamps()
    })
  }

  down () {
    this.drop('membership_payments')
  }
}

module.exports = MembershipPaymentSchema
