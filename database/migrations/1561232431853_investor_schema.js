'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestorSchema extends Schema {
  up () {
    this.create('investors', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('investors')
  }
}

module.exports = InvestorSchema
