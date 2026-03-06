let horas = parseInt(Math.random()*251);
let dependentes = parseInt(Math.random() * 7);

let valorHora = 168;
let valorDependente = 80;

let salarioBruto = (horas * valorHora) + (dependentes * valorDependente);
let descontoINSS = salarioBruto * 0.085;
let descontoIR = salarioBruto * 0.05;
let salarioFinal = salarioBruto - descontoINSS - descontoIR;

document.getElementById('horas').textContent = `Horas trabalhadas = ${horas}`;

document.getElementById('dependentes').textContent =
  `Dependentes: ${dependentes}`;
document.getElementById('salarioBruto').textContent = `Salário bruto: R$ ${salarioBruto.toFixed(2)}`;
document.getElementById('descontoINSS').textContent =
  `Desconto INSS: R$ ${descontoINSS.toFixed(2)}`;
document.getElementById('descontoIR').textContent =
  `Desconto IR: R$ ${descontoIR.toFixed(2)}`;
document.getElementById('salarioFinal').textContent =
  `Salário final: R$ ${salarioFinal.toFixed(2)}`;