const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const sakeButton = document.getElementById("sake-button")
const cokeButton = document.getElementById("coke-button")
const addMyMoney = document.getElementById("add-my-money")
const myMoneyDisplay = document.getElementById("my-money")
const addAmountMoney = document.getElementById("add-amount-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const change = document.getElementById("change")

let myMoney = 0
let amountMoney = 0

addMyMoney.onclick = () => {
  myMoney += 1000
  myMoneyDisplay.textContent = myMoney
}

addAmountMoney.onclick = () => {
  if (myMoney >= 100) {
    myMoney -= 100
    amountMoney += 100
    myMoneyDisplay.textContent = myMoney
    amountMoneyDisplay.textContent = amountMoney
  }
}

change.onclick = function() {
  if (amountMoney > 0) {
    myMoney += amountMoney
    amountMoney = 0
    myMoneyDisplay.textContent = myMoney
    amountMoneyDisplay.textContent = amountMoney
  }
}

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    case "sake":
      drinkImgSrc =
        "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

teaButton.onclick = () => {
  if (amountMoney >= 100) {
    amountMoney -= 100
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("tea")
    display.append(image)
  }
}

cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    amountMoney -= 130
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("coke")
    display.append(image)
  }
}

sakeButton.onclick = () => {
  if (amountMoney >= 150) {
    amountMoney -= 150
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("sake")
    display.append(image)
  }
}
