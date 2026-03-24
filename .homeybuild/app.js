'use strict';

const Homey = require('homey');

class HagelschutzApp extends Homey.App {

  async onInit() {
    this.log('Hagelschutz App started successfully');
  }

}

module.exports = HagelschutzApp;
