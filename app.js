const a = 15;
const b = 10;

//1.Addition [+]
console.log(`${a} + ${b} : ${a + b}`);
document.getElementById('add').innerHTML = a + b;

//2.Subtraction [-]
document.getElementById('sub').innerHTML = a - b;
console.log(`${a} - ${b}  : ${a - b}`);

//3.multiplication [x]
console.log(`${a} x ${b}  : ${a * b}`);
document.getElementById('mul').innerHTML = a * b;

//4.division [/]
console.log(`${a} / ${b}  : ${a / b}`);
document.getElementById('div').innerHTML = a / b;

//5.Modulus
console.log(`${a} % ${b} : ${a % b}`);
document.getElementById('mod').innerHTML = a % b;
