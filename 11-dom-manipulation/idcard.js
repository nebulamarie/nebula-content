let button = document.querySelector('button');
let nameInput = document.querySelector('#name')
let cardName = document.querySelector('#cardName')
let cardNumber = document.querySelector("#cardNumber")
let cardAddress = document.querySelector("#cardAddress")
let cardFun = document.querySelector("#cardFun")


let name = document.querySelector("#name")
let numberInput = document.querySelector("#number")
let address= document.querySelector("#address")
let fun = document.querySelector("#fun")
 

button.addEventListener('click',e=>{
    cardName.innerText = `Name: ${nameInput.value}`
    cardNumber.innerText = `ID Number: ${numberInput.value}`
    cardAddress.innerText= `Address: ${address.value}`
    cardFun.innerText = `Fun Fact: ${fun.value}`

document.getElementById("ID Card Info").style.display = "block";
})