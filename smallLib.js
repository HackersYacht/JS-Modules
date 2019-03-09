function sum(x,y){
  return x+y;
}

function sub(x, y){
  if(x>y){
    return x-y
  }
  return y-x
}

function divide(x, y){
  return x/y
}

function d(a , b){
  return divide(a, b)
}

module.exports = {sum, sub, d}
