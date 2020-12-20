var engine  = require('clap-trigger');

var trigger = new engine(); // options here

trigger.start(function(){
  console.log("Start")
});

trigger.clap(function() {
  console.log("Simple clap here");
});

// trigger.claps(2, function() {
//   console.log("Double clap here"); 
// });

