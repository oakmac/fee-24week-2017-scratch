var $ = window.jQuery

function buildPerson (htmlList, person) {
  htmlList += '<li>' + person.fname + ' ' + person.lname +
              '</li>'
  return htmlList
}

function clearLoadingState () {
  $('#loadClassBtn').show()
  $('#loadClassBtnLoading').hide()
}

function fetchClassDataSuccess (classList) {
  var theHTMLList = classList.reduce(buildPerson, '')
  $('#classList').html(theHTMLList)
  clearLoadingState()
}

function fetchClassDataError () {
  $('#classList').html('Opps :( Sorry, could not fetch the class list. Please try again.')
  clearLoadingState()
}

function fetchClassData () {
  $.ajax({
    dataType: 'json',
    error: fetchClassDataError,
    url: 'class.json?_slow=1',
    success: fetchClassDataSuccess
  })
}

function setLoadingState () {
  $('#loadClassBtn').hide()
  $('#loadClassBtnLoading').show()
}

function finishSlideUp () {
  $('#slideUpBtn').hide()
  $('#slideDownBtn').show()
}

function clickSlideUpBtn () {
  $('#crazyDiv').slideUp(finishSlideUp)
}

function finishSlideDown () {
  $('#slideUpBtn').show()
  $('#slideDownBtn').hide()
}

function clickSlideDownBtn () {
  $('#crazyDiv').slideDown(finishSlideDown)
}

function clickClassBtn () {
  fetchClassData()
  setLoadingState()
}

function addEvents () {
  $('#loadClassBtn').click(clickClassBtn)
  $('#slideUpBtn').click(clickSlideUpBtn)
  $('#slideDownBtn').click(clickSlideDownBtn)
}

function init () {
  addEvents()
}

$(init)
