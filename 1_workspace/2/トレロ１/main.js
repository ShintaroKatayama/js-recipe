const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const container2 = document.getElementById('cards-container2')
const container3 = document.getElementById('cards-container3')
const addButton = document.getElementById("add-button")
const addButton2 = document.getElementById("add-button2")
const addButton3 = document.getElementById("add-button3")

inputElement.addEventListener("keypress", enter)

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

inputElement2.addEventListener("keypress", enter2)

function enter2(e) {
  if (e.keyCode === 13) {
    const text = inputElement2.value

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
    container2.append(card)
    // 入力欄を空にする
    inputElement2.value = ""
  } else {
    return
  }
}
// 入力欄の値（テキスト）をとりだして、 text にいれる

inputElement3.addEventListener("keypress", enter3)

function enter3(e) {
  if (e.keyCode === 13) {
    const text = inputElement3.value

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
    container3.append(card)
    // 入力欄を空にする
    inputElement3.value = ""
  } else {
    return
  }
}
// 入力欄の値（テキスト）をとりだして、 text にいれる
