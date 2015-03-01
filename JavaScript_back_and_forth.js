var b = require('bonescript');

int dirpin = ;
int steppin = ;
int enable = ;


b.pinMode(dirpin, b.OUTPUT);
b.pinMode(steppin, b.OUTPUT);

var i = 0;

 loop();


 function loop(){
  
  b.digitalWrite(dirpin, b.HIGH);    // sets direction
  setInterval(toggle, 1000);

  for (i = 0; i<1000; i++)       // 800 microsteps is one revolution; 4 micro step is one step
  {
    b.digitalWrite(steppin, b.LOW);  // This LOW to HIGH change is what creates the
    b.digitalWrite(steppin, b.HIGH); // rising edge so that the driver knows to when to step.
    setInterval(500);      
  }                              
  
  b.digitalWrite(dirpin, b.LOW);    // sets direction
  setInterval(1000);

  for (i = 0; i<1000; i++)       // 800 microsteps is one revolution; 4 micro step is one step
  {
    b.digitalWrite(steppin, b.LOW);  // This LOW to HIGH change is what creates the
    b.digitalWrite(steppin, b.HIGH); // rising edge so that the driver knows to when to step.
    setInterval(500);      
  }  
}
