//要素を取得
const input = document.getElementById("input")
const addbutton = document.getElementById("add-button")
const memoContainer= document.getElementById("memo-container")

let memos = []

if (localStorage.memos) {
  memos = JSON.parse(localStorage.memos)
}

addbutton.onclick = function() {
// console.dir(memoContainer)
memoContainer.innerHTML = ""
memos.push(input.value)
input.value = ''
localStorage.memos = JSON.stringify(memos)

// console.log(memos)
for (let i = 0; i < memos.length; i++) {
  const text = memos[i]
  const div = document.createElement("div")
  div.textContent = text
  memoContainer.append(div)
}
}

for (let i = 0; i < memos.length; i++) {
  const text = memos[i]
  const div = document.createElement("div")
  div.textContent = text
  memoContainer.append(div)
}