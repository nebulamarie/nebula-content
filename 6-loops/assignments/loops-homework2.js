// Loops Practice

// 1. Write a loop that doubles each number in an array and returns the array of doubled numbers
// let array = [15, 23, 67, 42]
// let hold = []
// for (let i=0; i<array.length; i++){
//     hold.push(array[i] *2)

// }
// console.log(hold)

// 2. Write a loop that counts the number of times a letter appears in a string
// let mystring = "Jessica"
// let count = 0
// for (let i=0; i< mystring.length; i++){
//    if(mystring[i]==="s"){
//     count +=1
//    }
// }
// console.log(count)

// 3. Write a while loop that counts down from 10 to 0
// let i = 10
// while  (i >= 0) {
//   console.log(i)  
// i--
// // console.log(i)
// }

// 4. Write a loop that takes an array of numbers and returns the sum of all the even numbers

// let myarray = [22, 13, 8, 11, 6]
// let sum = 0
// for (let i=0; i <myarray.length; i++){
    
//     if (myarray[i]%2 ===0){
//       sum+=myarray[i]

//     }
  
// }
// console.log(sum)

// 6. Write a loop that takes an array of numbers and returns the sum of all the numbers that are divisible by 5

let myarray = [25, 63, 22, 15, 17, 45]
let sum = 0
for (let i=0; i<myarray.length; i++){
    if(myarray[i]%5 ===0){
        sum+=myarray[i]
    }
}
console.log(sum)

// 7. Write a while loop that adds consecutive numbers (1+2+3+4.....) and exits when the number is divisible by 7
// ie: 1st Loop  1+2 = 3    Break if divisible by 7 False
// ie: 2nd Loop  1+2+3 = 6  Break if divisible by 7 False
// ie: 3rd Loop  1+2+3 = 6  Break if divisible by 7 False
