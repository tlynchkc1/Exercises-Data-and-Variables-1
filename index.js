// 1. Declare and assign the variables here:
let shuttleName = 'Screaming Firehawk';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = .621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log("shuttleName is a " + typeof(shuttleName));
console.log("shuttleSpeed is a " + typeof(shuttleSpeed));
console.log("distanceToMars is a " + typeof(distanceToMars));
console.log("distanceToMoon is a " + typeof(distanceToMoon));
console.log("milesPerKilometer is a " + typeof(milesPerKilometer) +"\n");




// Code your solution to exercises 3 and 4 here:

let milesToMars = distanceToMars*milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars");

let milesToMoon = distanceToMoon*milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");


