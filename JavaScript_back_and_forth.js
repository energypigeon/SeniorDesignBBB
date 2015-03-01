var b = require('bonescript');

var dirpin = "P9_11";
var steppin = "P9_13";
var enable = "P9_15";
var state = b.LOW;              // Start the IO at a LO state

b.pinMode(dirpin, b.OUTPUT);
b.pinMode(steppin, b.OUTPUT);

var i = 0;

 loop();

 function loop(){
  
  b.digitalWrite(dirpin, b.HIGH);    // sets direction
  setInterval(toggledir, 1000);

  for (i = 0; i<1000; i++)       // 800 microsteps is one revolution; 4 micro step is one step
  {
    b.digitalWrite(steppin, b.LOW);  // This LOW to HIGH change is what creates the
    b.digitalWrite(steppin, b.HIGH); // rising edge so that the driver knows to when to step.
    setInterval(togglestep, 500);      
  }                              
  
  b.digitalWrite(dirpin, b.LOW);    // sets direction
  setInterval(toggledir, 1000);

  for (i = 0; i<1000; i++)       // 800 microsteps is one revolution; 4 micro step is one step
  {
    b.digitalWrite(steppin, b.LOW);  // This LOW to HIGH change is what creates the
    b.digitalWrite(steppin, b.HIGH); // rising edge so that the driver knows to when to step.
    setInterval(togglestep, 500);      
  }  
}

function toggledir() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite(dirpin, state);
}

function togglestep() {
    if(state == b.LOW) state = b.HIGH;
    else state = b.LOW;
    b.digitalWrite(steppin, state);
}

