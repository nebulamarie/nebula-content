// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)
//https://www.figma.com/file/5ZU9dxXndklmS4vAY9n5yM/Untitled?node-id=0%3A1&t=CYjkmsCFqpI3nHvT-1

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
    //O(log n) because it is performing one function once no matter how big the arrayy is
    function loopAndPrint(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
    
    // 1.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
    //-> 
    // As it goes through the array it will spike up but then flattens out as it elimninates non matches
        // O(1) -> performing 1 function each time it loops through the array to find matches of max
    function findMax(arr){
        let max = arr[0];
    
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i]
            }
        }
    
        return max;
    }
    
    // 2.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        // O(1) performing same operation on the array once
    function printLast(arr){)
        console.log(arr[arr.length-1]);
    }
    
    // 3.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        //O(log n) -> 
    // one inmput to iterate thru the string, incease by 2, return a new string
    
    function everyOther(str){
        let newStr = '';
    
        for(let i = 0; i < str.length; i+=2){
            newStr += str[i]
        }
    
        return newStr;
    }
    
    // 4.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        //O(1) will perform the same oparation of doubling num no matter how big the number that is passed thru at num
    
    function doubled(num) {
        return 2 * num
    }
    
    // 5.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        //  O(log n) -> one imput to multiply num and one imput to multiply the result 
    
    function multipleSteps(num) {
        let final = 4 * num
        return final * 3
    }
    
    // 5.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        // O(log n) ->one imput to iterate through the array and imput to "push" .
    
    function backwardsArr(arr) {
        let arrReversed = []
        for (let i = arr.length - 1; i >= 0; i--) {
          arrReversed.push(arr[i])
        }
        return arrReversed
    }
    // 6.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
    
        // O(n^2) quadratic : there are loops within loops and will require one imput per operattion. There are a total of operrations to be performed.
    
    function multiplyAll(arr1, arr2) {
        if (arr1.length !== arr2.length) return undefined
        let total = 0
        for (let i of arr1) {
          for (let j of arr2) {
            total += i * j
          }
        }
        return total
    }
    // 7.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for yOour answer.
        //O(1) will be performing the same operation of adding an element to the end of the array no matter how long the array is 
    
    let nums = [10,20,30,40];
    nums.push(50);
    
    // 8.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        // O(1)  will be performing the same operation of adding an element to the beginning no matter how big the number is
    
    let nums2 = [10,20,30,40];
    nums.unshift(0);
    
    // 9.   What is the big O of the following function
    //      Describe what the function does and use that as the reasoning for your answer.
        //O(n) one imput to iterate throught the length of the array and one imput to multiply the array assignment
    function logTime(arr) {
        let numberOfLoops = 0
        for (let i = 1; i < arr.length; i *= 2) {
          numberOfLoops++
        }
        return numberOfLoops
    }