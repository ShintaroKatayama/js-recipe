const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

inputElement.addEventListener('keypress', enter)

function enter(e) {
  if (e.keyCode === 13) {
    const text = inputElement.value
  
    // card を作成
    const card = document.createElement("div")
    card.className = "card"
    
    // todo を作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    
    // todo を card の中に追加する
    card.append(todo)
  
    // card を container の中に追加する
  
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    
    // 削除ボタン を押したときの処理を登録
    deleteButton.onclick = function() {
      // カードを削除する
      card.remove()
    }
  
    // 削除ボタン を card の中に追加する
    card.append(deleteButton)
    
    // card を container の中に追加する
    container.append(card)
    // 入力欄を空にする
    inputElement.value = ""
  } else {
    return
  }
}
    // 入力欄の値（テキスト）をとりだして、 text にいれる
