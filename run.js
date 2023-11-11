const mrPapas = document.getElementById("mr-papas");

let x = 0;

function moveMrPapas() {
  x = x + 20;
  mrPapas.style.left = `${x}px`;
}

setInterval(moveMrPapas, 100);
