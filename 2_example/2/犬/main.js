const imageElement = document.getElementById("dog-image")
const choice = document.getElementById("choice")

const option = document.createElement("option")
option.textContent = "sibainu"
choice.append(option)

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breed/hound/images/random")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
