// var a = 5;
// var b = 10;

// if (a === 5) {
//   let a = 4; // O escopo é dentro do bloco if
//   var b = 1; // O escopo é dentro da função

//   console.log(a);  // 4
//   console.log(b);  // 1
// }

// console.log(a); // 5, pq o que foi feito dentro do bloco (let) não altera sua referencia fora do bloco
// console.log(b); // 1, já var mesmo estando dentro do bloco altera sua referencia para toda a função

// características:
// var: pode ser manipulada de qqr lugar do código e não precisa ser declarada
// let: permite ser manipulada de forma diferente dentro de blocos diferentes, mas deve sempre ser declarada no início do codigo
// const: valor constante que nunca será alterado. deve ser declarada no início do código e possuir um valor    

let altura = 5;
let comprimento = 7
let area = 'circulo';

if(area === 'quadrado'){
    console.log(altura * comprimento)
} 
else if (area === 'triangulo'){
    console.log(altura * comprimento / 2)
}
else 
console.log('Forma desconhecida!')
