// The Fortune Teller
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

    let numOfKids =3
    let partnersName = "Noel"
    let location = "NY"
    let jobTitle = "manager"
   
// let future = 'You will be a '  + jobTitle +  " in " + location + ', and married to ' + partnersName + ' with' + numOfKids + 
// ' kids.'
// console.log(future)


// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.
//  let birthYear = 1973;
//  let futureYear = 2050;
//  let futureAge =(futureYear - birthYear);
// console.log('I will be either' + " "+ futureAge + " " + 'or' + " " + (futureAge-1) + " " + 'in'+ " " + futureYear + ".")



// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// let currentAge = 49;
// let maxAge = 96;
// let amountPerDay = 3;
// let remainingLife = maxAge - currentAge*365;
// console.log("You will need"+ " "+ remainingLife * amountPerDay + " " + 'cookies to last you until the ripe old age of' + " " + maxAge + ".")




// Calculate properties of a circle, using the definitions here:
        // arc: a curved line that is part of the circumference of a circle
        // chord: a line segment within a circle that touches 2 points on the circle.
        // circumference: the distance around the circle.
        // diameter: the longest distance from one end of a circle to the other.
        // origin: the center of the circle
        // pi (pi): A number, 3.141592..., equal to (the circumference) / (the diameter) of any circle.
        // radius: distance from center of circle to any point on it.
        // sector: is like a slice of pie (a circle wedge).
        // tangent of circle: a line perpendicular to the radius that touches ONLY one point on the circle.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
// let radius = 2;
// let circumference = 3;
// let area = radius * 3.14
// console.log(area)


// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celcius = 35;
let fahrenheit = 45;
let conversion = (fahrenheit -32)/1.8;
let cToFconversion = (celcius * 1.8) + 32;


console.log(cToFconversion)
