// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

'word'   =>  'drow'

function solution(str){
    let arr = str.split("")
    let reverse = arr.reverse()
  console.log(reverse)
    //return(str.reverse)
    let strg = reverse.join("")
    console.log(strg)
    return(strg)
  }


// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

//DESCRIPTION:
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    //console.log(s)
    let hold = ('')
    console.log(n)
    for (let i=0; i< n; i++){
    hold=hold.concat(s)
    console.log(s)
    }
    return(hold)
  }


// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
    findSmallestInt(args) {
      //array -> number
      let num = Infinity
      for (let i=0; i<args.length; i++){
        console.log(args[i])
        if (args[i]<num){
          num=args[i]
        }
      }
  return num      
    }
  }
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
let arrCombo = arr1.concat(arr2)
console.log(arrCombo)
console.log(sum(arrCombo.length[i]))



// https://www.codewars.com/kata/544675c6f971f7399a000e79

const stringToNumber = function(str){
    // console.log(parseInt(str))
    //return null;
  }
  //console.log(str)