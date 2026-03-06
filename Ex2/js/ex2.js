let nota1 = parseInt(Math.random() * 11);
let nota2 = parseInt(Math.random() * 11);
let nota3 = parseInt(Math.random() * 11);
let nota4 = parseInt(Math.random() * 11);

// Corrigido para somar nota4 e não 'notas'
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Usando template strings corretamente com crases ( ` )
document.getElementById('nota1').textContent = 
`Nota 1: ${nota1}`;
document.getElementById('nota2').textContent = 
`Nota 2: ${nota2}`;
document.getElementById('nota3').textContent = 
`Nota 3: ${nota3}`;
document.getElementById('nota4').textContent = 
`Nota 4: ${nota4}`;
document.getElementById('media').textContent = 
`Média: ${media.toFixed(2)}`;