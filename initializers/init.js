'use strict'
const {Initializer, api} = require('actionhero')
const dd = require('dd-trace').init()
const scope = dd.scope();

module.exports = class dataDog extends Initializer {
  constructor() {
    super()
    this.name = 'dataDog Init'
  }

  initialize() {
    api.log("I'm in yer initializer")
  }

  start () {
    console.log(scope.active())
    api.scope = scope
  }
}
