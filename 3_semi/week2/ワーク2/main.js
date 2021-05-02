const input = document.getElementById("input")
const addbutton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")
const change = document.getElementById("change-button")

let memos = []

const add = function() {
  if (input.value === "") {
    return
  }
  memos.push(input.value)
  // console.log(memos)
  draw()
}

addbutton.onclick = add

//配列の中身を表示する
const draw = function() {
  memoContainer.innerHTML = ""
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")
    div.textContent = text

    //削除ボタンを作り、divに追加
    const deletebutton = document.createElement("div")
    deletebutton.textContent = "消去"
    deletebutton.className = "delete"
    div.append(deletebutton)
    memoContainer.append(div)
    input.value = ""

    deletebutton.onclick = function() {
      div.remove()
    }
  }
}

//memoContainerの中身を削除し、配列を並び替えて再描画
change.onclick = function() {
  memos.reverse()
  // console.log(memos)
  draw()
  // memos = []
}

// 消去押したとき追加押したら一気に増える。
// 関数宣言を変えたら動かない
