var $ = window.jQuery

function buildPersonHTML (htmlList, person) {
  htmlList += '<li>' + person.fname + ' ' + person.lname + '</li>'
  return htmlList
}

function clearLoadingState () {
  $('#loadClassBtn').show()
  $('#loadClassBtnLoading').hide()
}

function fetchClassDataSuccess (classList) {
  var classListHTML = classList.reduce(buildPersonHTML, '')
  $('#classList').html(classListHTML)
  clearLoadingState()
}

function fetchClassDataError () {
  $('#classList').html('<p>Opps :( Sorry, could not fetch the class list. Please try again.</p>')
  clearLoadingState()
}

function fetchClassData () {
  $.ajax({
    dataType: 'json',
    error: fetchClassDataError,
    success: fetchClassDataSuccess,
    url: 'class.json?_slow=1'
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

function clickFetchClassBtn () {
  fetchClassData()
  setLoadingState()
}

function addEvents () {
  $('#loadClassBtn').click(clickFetchClassBtn)
  $('#slideUpBtn').click(clickSlideUpBtn)
  $('#slideDownBtn').click(clickSlideDownBtn)
}

function init () {
  addEvents()
}

$(init)
