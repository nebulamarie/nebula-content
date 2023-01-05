// .Map Practice 

// When you answer these questions I want to see your thought process in pseudo-code/comments.
//const message = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 

// 1. Using the .map method and the provided array of strings (above), create a new array that containing only the first letter of each string.
// i will create a variable to hold the new string 
// I will be using a loop to iterate through the arrany and then use the .push method to push the newly createed array into the variable

// const messages = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 
// let newArray =  messages.map(message => {
//      return message[0]
// }    
// )

// console.log(newArray)


//2. Using the .map method and the provided array of strings (above), create a new array containing only words that are longer than 6 characters.
// i will use 
const messages = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'] 

let newArray = messages.map(message => {
      if (message.length >= 6)
      return(message)
 })
 //console.log(newArray)
 let filteredArray=newArray.filter(element => {
     if (element === undefined) {
          return false
     
     }
     else {
          return true
     }
 }
     )
console.log(filteredArray)

// 3. Using the .map method and the provided array of strings (above), create a new array containing 3 strings. 

