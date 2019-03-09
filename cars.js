class Car {
  constructor(type, windows=6){//setting 6 as the default number of windows
    this.tyres = 4
    this.windows = windows
    this.type = type
  }

  turnLeft(){
    console.log('turning left ...')
  }
  turnRight(){
    console.log('turning right ...')
  }

  getCarType(){
    return 'I own a very nice '+this.type+'.'
  }
}

class Tesla extends Car {
  constructor(type, windows){
    super(type, windows)
    this.electricCar = true
  }
  
}

var myCar = new Tesla('sedan')
console.log('My car has '+myCar.tyres+' tyres'+ ' and '+myCar.windows+' windows.')
console.log(myCar.getCarType())
console.log(myCar.electricCar)

var myCar = new Tesla('convertible', 1)
console.log('My car has '+myCar.tyres+' tyres'+ ' and '+ myCar.windows+' windows.')
console.log(myCar.getCarType())
console.log(myCar.electricCar)
