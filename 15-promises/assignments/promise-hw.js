// 1.   What is the order of output?

setTimeout(() => {
    console.log('a');
}, 1);
console.log('b');
// 'b' would log first then 'a'

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');



setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 3);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))

// 2.   Create a promise for something you may, or may not do.
// //let promiseToDoLaundry = new Promise((resolve, reject) => {
//     let isClean = true;
//         if (isClean)  {
//             resolve("clean")
//         }    
//         else {
//                 reject("dirty")
//             }
            
//         }) 



// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.

// let promise = new Promise(resolve, reject)  {
//     setTimeout() => reject(Error("try again!")), 1000);
// });



// 4.   Using the prior example use .then and .catch to handle responses and rejections
// //promise.then(message) => {
//     console.log('your clothes are'+ message)
// //})promise.catch(message) => {
// console.log('your clothes are still'+ message)
// //})

// 5.   What does a promise resolve to?
//"a promise resolves to a given value. if the value is a promise, that promise is returned, 
//otherwise the .then method is activated"

// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page
HTML
<button>PRESS</button>

let button = document.querySelector('button');

let state = true;
button.addEventListener('click', e=> {
 let apiCall = new Promise((resolve, reject)=>{
   setTimeout(()=>{
     if(true){
       resolve('red')
     }else{
         reject('failure')
       }
       },2000)
       })
    
apiCall.then(res =>{
  let bod = document.querySelector('body');
  bod.style.backgroundColor = res;
}).catch(rej=>{console.log(rej,'rej')})
})

// // 7. What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v);
//     return v * 2;
// })
// return will be console.log 4

// .then(v => {
//     console.log(v);
//     return v * 2;
// })
// return will be console.log 8

// .then(v => {
//     console.log(v);
//     return v * 2;
// })
// return will be console.log 16

// .finally(v => {
//     console.log(v)
// })

// // 2
// 4
// console.log will be undefined