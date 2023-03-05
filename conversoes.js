//conversao implicita

const numero = 234
const numeroString = '234'

// console.log(numero === numeroString)
// console.log(numero == numeroString)

console.log(numero + numeroString)

//conversao explicita
//Number() converte uma string em numero 
console.log(numero + Number(numeroString))