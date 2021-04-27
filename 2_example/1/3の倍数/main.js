let n = 0
const genkifunction = function(number) {
  n += 1
  if (n > number) {
    return
  } else if (n % 3 === 0) {
    console.log(n + "!!!!!")
  } else {
    console.log(n)
  }
}

setInterval(genkifunction, 1000, 5)
