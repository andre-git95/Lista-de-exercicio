let numero1 = parseInt(Math.random() * 101);
let numero2 = parseInt(Math.random() * 101);
let soma = numero1 + numero2;
let resultado;

if (soma <= 100) {
    resultado = soma * 3;
    document.getElementById("resultado").textContent =
        "Soma = $(soma). Como é menor ou igual a 100, multiplicou por 3. Resultado: $(resultado)";
} else {
    resultado = soma * 5;
    document.getElementById("resultado").textContent =
        "Soma = $(soma). Como é maior que 100, multiplicou por 5. Resultado: $(resultado)";
}

document.getElementById("numero1").textContent =
    "Número 1: $(numero1)";
document.getElementById("numero2").textContent =
    "Número 2: $(numero2)";