const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("square")) {
    figure.classList.add("rounded")
  } else if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.remove("square")
    figure.classList.add("triangle")
  } else {
    figure.classList.remove("triangle")
    firgure.classList.add("square")
  }
}
