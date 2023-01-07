// Solve the following problems using recursion:

// 1. Write a recursive function that prints the numbers 1 through n. Printing should happen once per call to the function.

function printNum(n) {
    if (n == 0) {
        return
    }else {
        console.log(n)
        printNum(n-1)
    }

}
console.log(printNum(3))

// 2. Let's create a recursive function that returns the factorial of a number. The factorial of a number is the product of all the integers from 1 to that number.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. You should have a single input parameter, n, and return the factorial of that number.

// function factorial(n) {
//     if (n == 1 || n == 0)
//         return 1;
//         else
//         return n * factorial(n-1)
// // }

// // 3. Write a recursive function that prints the Fibonacci sequence of a given number. 
// //The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// //For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// function Fibonacci(n) {
//     const fib = [0, 2]
//     for(let i =2; i <n; i++) {
//         fib[i] = fib[i-1] +fib[i-2]
//     }
//     return fib
// }



// 4. Write a recursive function that takes a number (4 digits or longer) as an input and returns the sum of its digits. 
//For example, if the input is 4321, the sum would be 4 + 3 + 2 + 1 = 10.


// function addNums(num){
//     let arrayString = String(num).split(''); // turn num into string so we can split it into an array
//     let sum = 0; // have a placeholder variable for our sum
//     function recursion(array){
//       if(array.length == 0){ // if array has no more elements in it, break out of recursive function
//         return sum;
//       }
//       sum+=parseInt(array[array.length-1]); // last index of current array ['1','2','3'] => 3
//       array.pop(); // we remove the last index of the array (aka the number we just added to sum)
//       return recursion(array); // ['1','2'] and sum now equals 3
//     }
//    recursion(arrayString)
//     return sum;
//   }
//   console.log(addNums(123))

//   console.log('==========================')
// function addNums(num){
//   let array = String(num).split('').map(e=>parseInt(e));
//   function recursion(array){
//     if(array.length == 1) return array[0];
//     array[array.length-2]+=array[array.length-1]; // [1,2,3,4] 3 += 4  || [1,2,7,4] 
//     console.log(array.pop(),'pop'); // [1,2,7]
//     return recursion(array) // recursion([1,2,7]) 2 +=7 =9|| [1, 9, 7] pop out 7 [1,9] [9] ||[10]
//   }
//   return recursion(array)
// }
// console.log(addNums(1234))