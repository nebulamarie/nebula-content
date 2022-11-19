// Grab the elements and log them to the console


// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
document.getElementById("second")
<h1 id=​"second">​World​</h1>​

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
document.querySelectorAll("h1")
NodeList(5) [h1#first, h1#second, h1, h1, h1.catch-me]0: h1#first1: h1#second2: h13: h14: h1.catch-melength: 5[[Prototype]]: NodeList
let array = document.querySelectorAll("h1")
undefined
let choice = document.querySelectorAll("h1") 
undefined
console.log(choice)
VM1686:1 NodeList(5) [h1#first, h1#second, h1, h1, h1.catch-me]0: h1#first1: h1#second2: h13: h14: h1.catch-melength: 5[[Prototype]]: NodeList
undefined
console.log(choice[2])
VM2038:1 <h1>​Good Afternoon​</h1>​
undefined
console.log(choice[2].innerText)
VM2087:1 Good Afternoon

// Q4:  Grab the h1 with the text that says "Catch me if you can"
document.querySelector(".catch-me")

// Q5:  Grab the span element and change the text to "Got ya"
document.querySelector("span").innerText="Got ya"