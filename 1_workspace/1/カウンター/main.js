{
  const first = document.getElementById('first');
  const second = document.getElementById('second');
const last = document.getElementById('last');
const button = document.getElementById('button');

const aaa = function(e) {
  console.log(e.target.value);
}

const bbb = function(e) {
  console.log(e.target.value);
}

first.oninput = aaa;
second.oninput = bbb;
button.addEventListener('click', () => {
  ikoru();
})

const ikoru = function() {
  aaa + bbb;
};
}


