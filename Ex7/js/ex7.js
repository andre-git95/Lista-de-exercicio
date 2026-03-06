let peso = parseInt(Math.random() * 201);
let porcentagem = 0.20;
let pesoEmagrecer = peso * porcentagem;
let pesoEngordar = peso * porcentagem;

document.getElementById('peso').textContent =
  `Peso da pessoa: ${peso} kg`;
document.getElementById('emagrecer').textContent =
  `Peso após emagrecer 20%: ${pesoEmagrecer.toFixed(2)} kg`;
document.getElementById('engordar').textContent =
  `Peso após engordar 20%: ${pesoEngordar.toFixed(2)} kg`;