let numero = parseInt(Math.random() * 101);
let resultado;

if (numero % 2 === 0) {
  resultado = numero * numero;
  document.getElementById("numero").textContent =
    `Número sorteado: ${numero} (Par)`;
  document.getElementById("resultado").textContent =
    `Quadrado do número: ${resultado}`;
} else {
  resultado = numero * numero * numero;
  document.getElementById("numero").textContent =
    `Número sorteado: ${numero} (Ímpar)`;
  document.getElementById("resultado").textContent =
    `Cubo do número: ${resultado}`;
}