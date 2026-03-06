let a = parseInt(Math.random() * 10) + 1;
let b = parseInt(Math.random() * 10) + 1;
let c = parseInt(Math.random() * 10) + 1;
let x = parseInt(Math.random() * 10) + 1;
let resultado = (a * x * x) + (b * x) + c;
document.getElementById('a').textContent =`Valor de A: ${a};`

document.getElementById('b').textContent = `Valor de B: ${b};`

document.getElementById('c').textContent = `Valor de B: ${b};`
document.getElementById('x').textContent = `Valor de X: ${x};`

document.getElementById('equacao').textContent = `Equação: ${a} * ${x} + ${b} * ${x} + ${c};`

document.getElementById('resultado').textContent = `Resultado: ${resultado};`