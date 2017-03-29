
function clickDarkBtn () {
  console.log('set the dark theme!')
  document.body.classList.remove('light')
  document.body.classList.add('dark')
}

function clickLightBtn () {
  console.log('set the light theme!')
  document.body.classList.remove('dark')
  document.body.classList.add('light')
}

function byId (id) {
  return document.getElementById(id)
}

function clickToggleImgBtn () {
  var imgEl = byId('placeholderImg')
  var isShowingAnimals = imgEl.src.indexOf('animals') !== -1
  if (isShowingAnimals) {
    imgEl.src = 'https://placeimg.com/200/140/nature'
  } else {
    imgEl.src = 'https://placeimg.com/200/140/animals'
  }
}

function addEvents () {
  byId('darkThemeBtn').addEventListener('click', clickDarkBtn)
  byId('lightThemeBtn').addEventListener('click', clickLightBtn)
  byId('toggleImgBtn').addEventListener('click', clickToggleImgBtn)
}

function init () {
  addEvents()
  // then it does whatever...
}

init()







// foo
