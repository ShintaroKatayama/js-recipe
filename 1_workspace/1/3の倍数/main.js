const genkiFunction = function(number) {
  for (let n = 0; n < number; n++) {
    number = String(number)
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else if (n % 10 === 3) {
      console.log(n + "!!!!!!!")
    } else if (number.match("3")) {
      console.log(n + "!!!!!!!")
    } else if (n > 30 && n < 40) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n);
    }
  }
}

//34 など、3 の倍数ではありませんが、文字のなかに 3 が含まれる数字のときも元気になるようにプログラムを変更してください。
