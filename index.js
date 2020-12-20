const { Control } = require('magic-home');
const { Discovery } = require('magic-home');
var engine  = require('clap-trigger');

var trigger = new engine(); // options here

trigger.start(function(){
  console.log("Start")
});

var powerStatus = true;

let discovery = new Discovery();
discovery.scan(1500).then(devices => {
    ip = devices[0].address
    id = devices[0].id

    let light = new Control(ip);
    // light.setPower(true);
    
    light.setPower(powerStatus)

    trigger.clap(function() {
        console.log("Simple clap here");
        powerStatus = !powerStatus
        light.setPower(powerStatus)
      });
});