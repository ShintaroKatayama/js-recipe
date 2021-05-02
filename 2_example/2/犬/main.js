const div = document.getElementById("dog-image")
const choice = document.getElementById("choice")
const choiceNumber = document.getElementById("choiceNumber")

// 犬種を列挙
fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    // imageElement.src = data.message // 画像を表示する
    // console.log(data.message.keys());
    // console.log(Object.keys(data.message));
    const names = Object.keys(data.message)
    console.log(names)
    // let all = []
    for (let i = 0; i < names.length; i++) {
      const option = document.createElement("option")
      // all.push(names[i])
      // console.log(all);
      option.textContent = names[i]
      choice.append(option)
    }
    // console.log(names)
  })

// 指定したサーバーにデータを取りに行く
choice.onchange = function() {
  div.innerHTML = ""
  fetch(
    "https://dog.ceo/api/breed/" +
      choice.value +
      "/images/random/" +
      choiceNumber.value,
  )
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      // imageElement.src = data.message // 画像を表示する
      // console.dir(data.message)
      let imageList = data.message
      for (let i = 0; i < imageList.length; i++) {
        const Image = document.createElement("img")
        Image.src = imageList[i]
        div.append(Image)
      }
    })
}

//ランダムな犬種の写真の URL を、ランダムに指定した数だけ取得
choiceNumber.onchange = function() {
  div.innerHTML = ""
  fetch(
    "https://dog.ceo/api/breed/" +
      choice.value +
      "/images/random/" +
      choiceNumber.value,
  )
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      // imageElement.src = data.message // 画像を表示する
      // console.dir(data.message)
      let imageList = data.message
      for (let i = 0; i < imageList.length; i++) {
        const Image = document.createElement("img")
        Image.src = imageList[i]
        div.append(Image)
      }
    })
}

