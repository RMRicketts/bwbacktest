'use strict';
const {Action, api} = require('actionhero');
const fs = require('fs').promises;
const {exec} = require('child_process');

/*
module.exports.act = class DoAction extends Action {
  constructor() {
    super();
    this.name = 'act';
    this.description = 'I will do the thing';
    this.inputs = {
      msg: {
        required: true,
      },
    };
  }

  async run({params, response}) {
    try {
      fs.writeFile('/home/ec2-user/message.txt', params.msg);
    } catch (e) {
      console.log(e);
      throw new Error('failed to write file');
    }
    response.success = true;
  }
};

module.exports.chef = class Chef extends Action {
  constructor() {
    super();
    this.name = 'chef';
    this.description = 'I will redeploy the app using chef';
    this.inputs = {};
  }

  async run({params, response}) {
    let x;
    try {
      x = await fs.readFile('/home/ubuntu/message.txt', {encoding: 'utf8'});
      x = '<div>' + x + '</div>';
      console.log(x);
    } catch (e) {
      console.log(e);
      throw new Error('failed to update ansible');
    }
    try {
      await fs.writeFile('/home/ubuntu/index.html', x);
    } catch (e) {
      console.log(e);
      throw new Error('failed to write index.html for anisble');
    }
    try {
      exec("sudo chef-client -zr 'recipe[append]'");
    } catch (e) {
      console.log(e);
      throw new Error('failed to update chef');
    }
    response.status = true;
  }
};

module.exports.ansible = class Ansible extends Action {
  constructor() {
    super();
    this.name = 'ansible';
    this.description = 'I will redeploy the app using ansible';
    this.inputs = {};
  }

  async run({params, response}) {
    let x;
    try {
      x = await fs.readFile('/home/ubuntu/message.txt', {encoding: 'utf8'});
      x = '<div>' + x + '</div>';
      console.log(x);
    } catch (e) {
      console.log(e);
      throw new Error('failed to update ansible');
    }
    try {
      await fs.writeFile('/home/ubuntu/index.html', x);
    } catch (e) {
      console.log(e);
      throw new Error('failed to write index.html for anisble');
    }
    try {
      await exec(
        'ansible-playbook /home/ubuntu/ansible/playbook-apache.yaml -i /home/ubuntu/ansible/inventory.txt',
      );
    } catch (e) {
      console.log(e);
      throw new Error('unable to deploy ansible server');
    }
    response.status = true;
  }
};
*/
