// const imageElement = document.getElementById("dog-image")

// // 指定したサーバーにデータを取りに行く
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json() // 結果を json として読み込む
//   })
//   .then((data) => {
//     imageElement.src = data.message // 画像を表示する
//   })

//発展★
// const imageElement = document.getElementById("cat-image")
// const btn = document.getElementById("btn")

// btn.onclick = function() {
//   window.location.reload()
// }

// // 指定したサーバーにデータを取りに行く
// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => {
//     return res.json() // 結果を json として読み込む
//   })
//   .then((data) => {
//     imageElement.src = data[0].url // 画像を表示する
//   })


// 発展★★

const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random/3")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message[0].url // 画像を表示する
  })

// const selected = document.getElementById('selected')
// const container = document.getElementById('container')


// selected.addEventListener('change', function() {
//   const text = selected.value
//   hyouzi.textContent = 'あなたが選んだ数字は' + text + 'です'

// })


