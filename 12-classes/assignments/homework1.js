/* 
Write a class that creates animals
The animals should make a noise
The class should log what the animal eats
The class should log where the animal lives
Initialize 3 animals with your class & log a sentence to the console, ex:
`Dogs live in peoples houses, they bark and are carnivorous.`
*/

class Animal {
    constructor (name, noise, eats, lives) {
         this.name=name
         this.noise=noise
         this.eats=eats
         this.lives=lives
     }

getAnimal() {
 return (`${this.name} can ${this.noise} and eat ${this.eats}. Their home is a ${this.lives}.`)

}    
}

//let animal1 = new Animal('Dogs', 'bark', 'kibble', 'kennel')
//console.log(animal1.getAnimal())
//console.log(`${this.name}, can ${this.noise}, and eat ${this.eats}, . Their home is a ${this.lives})

//let animal2 = new Animal('Cats', 'meow', 'nip', 'cathouse')
//console.log(animal2.getAnimal())

//let animal3 = new Animal('Cows', 'moo', 'feed', 'barn')
//console.log(animal3.getAnimal())


/* 
Write a class that creates shoes
The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence to the console: ex:
`My flipflops are yellow, size 9, and 6 years old.` 
*/
//class Shoes {
    //constructor(size, color, type, age) {
        //this.size = size
        //this.color = color
        //this.type = type
        //this.age = age        
//}
//}
//let shoe1 = new Shoes('7', 'black', 'combat', '10')
//console.log(shoe1)
//console.log(`My ${shoe1.type} boots are over ${shoe1.age} years old. They are a ${shoe1.size} in ${shoe1.color} and go with everything.`)

//let shoe2= new Shoes('7', 'green', 'heels', 'a year')
//console.log(`My ${shoe2.type} are ${shoe2.age} old.  They are ${shoe2.color} and ${shoe2.size} in size.`)

/* 
Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape. 
Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape
Log to the console a sentnece about your shape:
`Given a cylander of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.` 

// Extend 4 classes off of shapes
// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))
// Have methods to find the areas of the differnt shapes

*/
class Shapes {
    constructor(height, width){
        this.height=height
        this.width=width
    }
getHeight(){
    return this.height
}
getWidth(){
    return this.width
}    
}

class Rectangle extends Shapes{
    constructor(height, width, length){
        super(height, width)
        this.length=length 
    }
getLength(){
    return this.length
}    
}
class Triangle extends Shapes{
    constructor(height, width, base){
        super(height, width)
        this.base=base
    }
getBase(){
    return this.base
}   

}
class Circle extends Shapes{
    constructor(height, width, radius){
        super(height, width)
        this.radius=radius
    }
getRadius(){
    return this.radius
}   

}

class Trapezoid extends Shapes{
    constructor(height, width, base){
        super(height, width)
        this.base=base
    }
getBase(){
    return this.base
}
}

// let rectangle = {
//     width: 6,
//     length: 3
// }
// let rectangle1= new Rectangle 
// console.log (`My rectangle has an area of ${rectangle.width * rectangle.length}`)

// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))


// let triangle = {
//     base: 6,
//     height: 18
// }
// let triangle1= new Triangle
// console.log(`This triangle's area is ${triangle.base/2 * triangle.height}`)

// let circle = {
//     radius: 15
// }
// let circle1 = new Circle
// console.log(`This circle has a radius of ${circle.radius*2*3.14}`)

let trapezoid ={
    height: 22,
    base1: 6,
    base2: 5
}
let trapezoid1 = new Trapezoid
console.log(`In this example the trapezoid has an area of ${trapezoid.height/2+trapezoid.base1+trapezoid.base2}`)