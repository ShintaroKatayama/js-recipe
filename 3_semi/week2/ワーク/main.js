const input = document.getElementById("input")
const addbutton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
const change = document.getElementById("change-button")

let memos = []

function action() {
  // console.dir(memoContainer)
  memoContainer.innerHTML = ""
  memos.push(input.value)
  console.log(memos)
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")

    div.textContent = text

    //削除クラスを作り、divにつける
    const deletebutton = document.createElement("div")
    deletebutton.textContent = '消去'
    deletebutton.className = 'btn'
    div.append(deletebutton)
    deletebutton.onclick = function() {
      div.remove()
    }

    memoContainer.append(div)
    input.value = ""
  }
}

memoContainer.remove()
addbutton.onclick = action

