const mrPapas = document.getElementById("mr-papas");

let x = 0;

function moveMrPapas() {
  x = x + 20;

  if (x - 300 > window.innerWidth) {
    x = 0;
  }
  mrPapas.style.left = `${x}px`;
}

setInterval(moveMrPapas, 30);
