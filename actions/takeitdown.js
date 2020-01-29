'use strict';
const {Action, api} = require('actionhero');
const fs = require('fs').promises;
const {exec} = require('child_process');

module.exports.getMethods = class getMethods extends Action {
  constructor() {
    super();
    this.name = 'getMethods';
    this.description = 'returns a list of available methods';
    this.inputs = {};
  }

  async run({params, response}) {
    let x = api.actions.actions;
    console.log(Object.keys(x));
    response.success = true;
    response.methods = Object.keys(x)
      .map(a => {
        //console.log(x[a]['1']);
        let pkg = {
          name: x[a]['1'].name,
          description: x[a]['1'].description,
        };
        return pkg;
      })
      .filter(b => {
        console.log(b.name);
        return b.name !== 'getMethods';
      })
      .sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
  }
};

module.exports.shutThisShitDown = class shutThisShitDown extends Action {
  constructor() {
    super();
    this.name = 'shutThisShitDown';
    this.description = 'Shut down site on port 5002';
    this.inputs = {};
  }

  async run({params, response}) {
    console.log(api.scope.active());
    console.log("I'm shutting it down");
    exec(
      "ps -ealf | grep serve | grep -v grep | awk '{print $4}' | xargs -I{} kill {}",
    );
    response.sucess = true;
  }
};

module.exports.leakMemory = class leakMemory extends Action {
  constructor() {
    super();
    this.name = 'leakMemory';
    this.description = 'I will use all yer memory';
    this.inputs = {};
  }

  async run({params, response}) {
    console.log(api.scope.active());
    console.log("I'm leaking the memz");
    let arr = [];
    let z = {
      key: 'this is a string',
      otro: 'this is a second string of stings of things',
      alto: 'This is a high class string',
    };
    let mem = process.memoryUsage();
    while ((mem.heapUsed + mem.external) / mem.heapTotal < 0.95) {
      arr.push({...z});
      mem = process.memoryUsage();
    }
    setTimeout(() => {
      return (response.success = true);
    }, 10000);
  }
};

module.exports.useCPU = class useCPU extends Action {
  constructor() {
    super();
    this.name = 'useCPU';
    this.description = 'I will use all the CPU';
    this.inputs = {};
  }

  run({params, response}) {
    console.log(api.scope.active());
    console.log('using the cpu');
    response.success = true;
    setTimeout(() => {
      console.log('i made it to the end of cpu');
      return;
    }, 15000);
    let mem = process.memoryUseage();
    while (mem.heapUsed / mem.heapTotal < 0.99) {
      mem = process.memoryUsage();
      console.log(mem, mem.heapUsed / mem.heapTotal);
    }
  }
};

module.exports.startTheThing = class startTheThing extends Action {
  constructor() {
    super();
    this.name = 'startTheThing';
    this.description = 'Launch site on port 5002';
    this.inputs = {};
  }

  run({params, response}) {
    exec('export PORT=5002; serve /var/www/lookit;');
    response.msg = 'The site is up';
  }
};
