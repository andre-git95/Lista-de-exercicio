let base = parseInt(Math.random()*100)+1;
let altura = parseInt(Math.random()*100)+1;
let area = (base*altura)/2;

document.getElementById('base').textContent = `Base do triângulo: ${base}`;
document.getElementById('altura').textContent = `Altura do triângulo: ${altura}`;
document.getElementById('area').textContent = `Area do triângulo: ${area}`;