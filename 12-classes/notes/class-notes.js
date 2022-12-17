const car1 = {
    // Key: Value OR Property: Value
      make: 'Honda',
      model: 'Accord',
      year: 2020,
      color: 'red',
      start() { console.log('Vroom!') },
      briefDescription() { 
        console.log(this.color) 
      }
    }
    // function CarGenerator(make, model, year, color) {
    //   return {
    //     make,
    //     model,
    //     year,
    //     color
    //   }
    // }
    class Car {
      constructor(color, make, model, productionYear, productionMouth) {
        this.color = color
        this.make = make
        this.model = model
        this.productionYear = productionYear
        this.productionMouth = productionMouth
      }
      start () { console.log('Vroom!') }
      paint(newColor) {
        this.color = newColor
        console.log(`The car is now ${this.color}`)
      }
    }
    const car2 = new Car('blue', 'Lamborghini', 'Pananerjam', 2020, 'June')
    // class className {
    //   constructor() {}
    //   method1() {}
    //   method2() {}
    //   method3() {}
    // }
    console.log(car2)
    car2.paint('red')
    // function carDescriber(car) {
    //   console.log(`This car is a ${car.year} ${car.make} ${car.model}`)
    // }
    // carDescriber(car1)
    // car1.briefDescription()
    // Log out all of the keys in the car object
    // console.log(Object.keys(car1) // [ 'make', 'model', 'year', 'color', 'start' ] 
    // )
    // console.log(typeof car1.start) // function
    // CRUD
      // Create
      // car1.miles = 1000
      // Read
      // console.log(car1.mil0es) // 1000
      // Update
      // car1.miles = 2000
      // console.log(car1)
      // Delete
      // delete car1.miles
      // console.log(car1)

     // new Car('Nissan Rogue', 15000, 'green', 'ok')
     // new Employee('Marie', 'Venor Relations', 35, 10)


// Practice Question 1    // Create a classroom for SEV9// 

class seV9  {
    constructor(name, city, state, gender, age){
        this.name = name
        this.city = city
        this.state = state
        this.gender = gender
        this.age=age
    }
}
    let Connor = newstudent (Connor, Laguna, CA, male, 28)
    let Shawn = newstudent (Shawn, Roosevelt, NY, male, 20)
    let Sarah = newstudent(Sarah, AnnArbor, Michigan, female, 28)
    let Ionnis= newstudent(Ionnis, Hicksville, NY, male, 32)





/Practice Question 2    // Add yourselves to the classroom
seV9.push newStudent(Marie, Bayshore, NY, female, 35)
console.log



