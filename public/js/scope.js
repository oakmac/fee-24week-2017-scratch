


function Popup (el, html) {
  var popup = {}
  popup.show = function () { }
  popup.hide = function () { }
  popup.setHtml = function (newHtml) { }
  return popup
}

Popup.prototype.isShowing = false

var menu1 = Popup(byId('btn2'), '<h1>I am menu 1!</h1>')
var menu2 = new Popup(byId('btn1'), '<h2>Menu 2</h2>')

console.log(menu1)
console.log(menu2)

if (menu1.isShowing) {
  // do something..
} else {
  // do another thing
}

function byId (id) {
  return document.getElementById(id)
}
