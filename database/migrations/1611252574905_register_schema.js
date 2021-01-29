'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.create('registers', (table) => {
      table.increments()
      table.string('age_group')
      table.string('styles')
      table.string('student_name', 80)
      table.string('age', 50)
      table.string('date_of_birth', 30)
      table.boolean('male')
      table.boolean('female')
      table.string('name_of_parents', 150)
      table.string('health_conditions', 250)
      table.string('emergency_contacts', 150)
      table.boolean('cash_payment_monthly')
      table.boolean('online_payment_monthly')
      table.string('sign', 120)
      table.string('date', 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }
}

module.exports = RegisterSchema
