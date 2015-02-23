//JavaScript Test file for "New_Stepper_Test.ino"


var b = require('bonescript');

var dirpin = //INSERT DIRECTION PIN HERE
var steppin = //INSERT STEP PIN HERE
var enable = //INSERT ENABLE PIN HERE
var input = 6; // input in cm, CHANGE THIS LINE TO CHANGE DESIRED DISPLACEMENT


//AVAILABLE ANALOG PINS:

//var adcPin = "P9_36";         //AIN0
//var adcPin = "P9_39";         //AIN0
//var adcPin = "P9_40";         //AIN1
//var adcPin = "P9_37";         //AIN2
//var adcPin = "P9_38";         //AIN3
//var adcPin = "P9_33";         //AIN4
//var adcPin = "P9_36";         //AIN5
//var adcPin = "P9_35";         //AIN6

b.pinMode(dirpin, b.OUTPUT);
b.pinMode(steppin, b.OUTPUT);
b.pinMode(enable, b.OUTPUT);

b.digitalWrite(dirpin, HIGH);
setInterval(toggle, 1000);

var i = 0;

loop();

function loop(){


input *= 0.393701;
required_steps = input/0.0003125; //converts inches to steps
required_steps = Math.floor(required_steps); //truncate
required_steps = required_steps * 4;   // scaling for 1/4 microstep

console.log('input in inches: ' + input + "\n");
console.log('Converted to steps before truncating: ' + required_steps + "\n");
console.log('After truncating: ' + required_steps + "\n");
console.log('multiplied by 4: ' + required_steps + "\n");

for (i = 0; i<required_steps; i++)       // 800 microsteps is one revolution; 4 micro step is one step
{
  b.digitalWrite(steppin, b.LOW);  // This LOW to HIGH change is what creates the
  b.digitalWrite(steppin, b.HIGH); // rising edge so that the driver knows to when to step.
  setInterval(500);            
}
b.digitalWrite(enable, b.HIGH);
setInterval(120000);

}


//BEGIN ORIGINAL ARDUINO CODE:
// int dirpin = 8;
// int steppin = 7;
// int enable = 9;
// float input = 6; // input in cm  CHANGE THIS LINE TO CHANGE DESIRED DISPLACEMENT
// float required_steps;

// void setup() 
// {
// pinMode(dirpin, OUTPUT);
// pinMode(steppin, OUTPUT);
// pinMode(enable, OUTPUT);
// Serial.begin(9600);
// }

// void loop()
// {

//   int i;

//   input *= 0.393701;                  // converts cm to inches
//   Serial.print("input in inches: ");  
//   Serial.print(input);                
//   Serial.print("\n");
  
//   required_steps = input/0.0003125;      // converts inches to steps
//   Serial.print("Converted to steps before truncating: ");
//   Serial.print(required_steps);
//   Serial.print("\n");
  
//   required_steps = floor(required_steps); // truncate
//   Serial.print("After truncating: ");
//   Serial.print(required_steps);
//   Serial.print("\n");
  
//   required_steps = required_steps * 4;   // scaling for 1/4 microstep
//   Serial.print("multiplied by 4: ");
//   Serial.print(required_steps);
//   Serial.print("\n");
  
//   digitalWrite(dirpin, HIGH);    // sets direction
//   delay(1000);

//   for (i = 0; i<required_steps; i++)       // 800 microsteps is one revolution; 4 micro step is one step
//   {
//     digitalWrite(steppin, LOW);  // This LOW to HIGH change is what creates the
//     digitalWrite(steppin, HIGH); // rising edge so that the driver knows to when to step.
//     delayMicroseconds(500);      
//   }                              
//   digitalWrite(enable, HIGH);
//   delay(120000); // holds the Serial Monitor for 2 minutes before refreshing
// }