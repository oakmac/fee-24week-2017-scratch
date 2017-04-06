
function clickBtn1 (evt) {
  $('li').attr('data-foo', 'bar')
  var x = $('li')[0].attr('data-foo')
  console.log(x)
}

function clickBtn2 (evt) {
  var elementStyles = $('.meat.best').css('font-size')
  console.log(elementStyles)
}

function clickTheBestMeat (evt) {
  console.log('you clicked bacon!')
}

function addEvents () {
  $('#btn1').click(clickBtn1)
  $('#btn2').click(clickBtn2)
  $('#foodList').on('click', '.meat.best', clickTheBestMeat)
}

function init () {
  addEvents()
  // then it does whatever...
}

$(init)












// foo
