//Create a folder 

//Create an input that accepts text
// Add a button to the page that when you click it it creates a new row of text acquired from the input field



let clicked = false
let square= document.querySelector('square')

let input= document.querySelector('input')
let field = document.querySelector("")
let inputValue = ('')
let btn= document.query.selector(button)

square.addEventListener("click",(e)=>{
    console.log(e)
    if (e.target === document.querySelector('.square')){
        clicked=!clicked
        console.log(`clicked: ${clicked}`)
  }
  clicked ? body.style.backgroundColor = 'blue' : body.style.backgroundColor = 'white'
});

for (let index= 0; index < 10; index ++) {
    const newSquare = document.createElement('div')
    newSquare.classList.add('square')
    document.querySelector('body').append(newSquare)
}
input.addEventListener('change', (e)=> {
    inputValue = e.target.inputValue
    console.log(inputValue)
})

