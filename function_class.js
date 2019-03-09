function Car(){
  this.tyres = 4
  this.windows = 6
  function turnLeft(){
    console.log('turning left ...')
  }
  function turnRight() {console.log('turning right ...')}
}

var myCar = new Car()
console.log(myCar.tyres)
