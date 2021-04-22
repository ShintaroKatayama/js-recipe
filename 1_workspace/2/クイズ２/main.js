const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")
const container = document.getElementById("choices-container")
const mainConteiner = document.getElementById("main-container")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう?",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

const btn1 = document.createElement("div")
btn1.classList.add("btn")
btn1.textContent = quiz.choices[0].text
container.append(btn1)

const btn2 = document.createElement("div")
btn2.classList.add("btn")
btn2.textContent = quiz.choices[1].text
container.append(btn2)

const btn3 = document.createElement("div")
btn3.classList.add("btn")
btn3.textContent = quiz.choices[2].text
container.append(btn3)

// quiz を画面に表示する関数
const reloadQuiz = function() {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

btn1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
btn2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
btn3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
