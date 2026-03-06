let calcasVendidas = parseInt(Math.random() * 201);
let salarioBase = 1500;
let valorCalca = 150;
let comissaoCalca = 35;
let comissaoTotal = calcasVendidas * comissaoCalca;
let salarioFinal = salarioBase + comissaoTotal;

document.getElementById('calcas').textContent =
    `Calças vendidas: ${calcasVendidas}`;
document.getElementById('valorCalca').textContent =
    `Valor de cada calça: R$ ${valorCalca}`;
document.getElementById('comissao').textContent =
    `Comissão total: R$ ${comissaoTotal}`;
document.getElementById('salario').textContent =
    `Salário final do vendedor: R$ ${salarioFinal}`;