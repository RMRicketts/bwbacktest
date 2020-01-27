'use strict';
const {Action, api} = require('actionhero');
const fs = require('fs').promises;
const {exec} = require('child_process');

module.exports.shutThisShitDown = class shutThisShitDown extends Action {
  constructor() {
    super();
    this.name = 'shutThisShitDown';
    this.description = 'I will shut this shit down';
    this.inputs = {};
  }

  async run({params, response}) {
    console.log(api.scope.active());
    console.log("I'm shutting it down");
    //exec('pkill node');
    response.sucess = true;
  }
};

module.exports.leakMemory = class leakMemory extends Actions {
  constructor() {
    this.name = 'leakMemory';
    this.descriptions = 'I will use all yer memory';
    inputs = {};
  }

  async run({params, response}) {
    console.log(api.scope.active());
    console.log("I'm leaking the memz");
    let str = 'this is a string, yipee';
    let arr = [];
    for (let i = 0; i < 10000000; i++) {
      arr.push(str);
    }
    response.success = true;
    setTimeout(() => {
      return;
    }, 10000);
  }
};

module.exports.useCPU = class useCPU extends Action {
  constructor() {
    this.name = 'useCPU';
    this.description = 'I will use all the CPU';
    this.inputs = {};
  }

  run({params, response}) {
    console.log(api.scope.active());
    console.log('using the cpu');
    response.success = true;
    setTimeout(() => {
      console.log('i made it to the end of cpu')
      return;
    }, 10000);
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
  }
};

module.exports.startTheThing = class startTheThing extends Action {
  constructor() {
    this.name = 'startTheThing'
    this.description = 'this will start the thing'
    this.inputs = {}
  }

  run() {
    //exec('serve 
  }
}
