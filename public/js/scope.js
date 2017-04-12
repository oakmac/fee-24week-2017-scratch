'use strict'

var favFruit = 'banana'

doAThing()

// What is the value of favFruit?
console.log(favFruit)

function doAThing () {
  insideAThing()

  function insideAThing () {
    favFruit = 'orange'
  }
}

if (favFruit === 'banana') {
  let myName = 'Chris'
  console.log(myName)
} else {
  let yourName = 'Mike'
  console.log(yourName)
}
