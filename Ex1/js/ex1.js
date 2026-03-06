// 1. Sorteia um número inteiro entre 0 e 100
let numero = parseInt(Math.random() * 101);

// 2. Exibe o número sorteado
document.getElementById('primeiroNumero').textContent = `Número sorteado: ${numero}`;

// 3. Exibe o Sucessor (n + 1)
document.getElementById('segundoNumero').textContent = `Sucessor: ${numero + 1}`;

// 4. Exibe o Antecessor (n - 1)
document.getElementById('soma').textContent = `Antecessor: ${numero - 1}`;

// 5. Exibe o Dobro (n * 2)
document.getElementById('resultadosubtracao').textContent = `Dobro: ${numero * 2}`;

// 6. Exibe a Metade (n / 2)
document.getElementById('resultadomultiplicacao').textContent = `Metade: ${numero / 2}`;