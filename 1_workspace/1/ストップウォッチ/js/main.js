let n = 0

const countUp = function(number) {
  n++
  if (n > number) {
    return
  } else if (n % 3 === 0) {
    console.log(n + "!!!!!!!!")
  } else {
    console.log(n)
  }
}

setInterval(countUp, 1000, 12)
