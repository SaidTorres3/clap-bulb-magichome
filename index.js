const { Control } = require('magic-home');
const { Discovery } = require('magic-home');
var engine = require('clap-trigger');

var trigger = new engine(); // options here

trigger.config = {
    DETECTION_PERCENTAGE_START : '10%',
    DETECTION_PERCENTAGE_END   : '10%',
    CLAP_AMPLITUDE_THRESHOLD   : 0.3,
    CLAP_ENERGY_THRESHOLD      : 0.3,
    CLAP_MAX_DURATION          : 2,
}

trigger.start(function(){
  console.log("Start")
});

var lightsOn = true;

let discovery = new Discovery();
discovery.scan(1500).then(devices => {
    console.log("Foco encontrado. Corriendo el programa.")

    ip = devices[0].address
    id = devices[0].id

    let light = new Control(ip);
    
    light.setPower(lightsOn)

    trigger.claps(2, function() {
        lightsOn = !lightsOn
        light.setPower(lightsOn)
        if(lightsOn) {
          console.log("Encendido")
        }else{
          console.log("Apagado")
        }
      });
});