const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const display = document.getElementById('display')

btn1.onclick = function() {
  display.textContent = '残念違います'
}

btn2.onclick = function() {
  display.textContent = '残念これも違います'
}

btn3.onclick = function() {
  display.textContent = '正解です！'
}

