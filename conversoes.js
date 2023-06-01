//conversao implicita
// Implicitamente o js vai por defaulta converter o dado para string.. então numa soma vai ter como resultado uma concatenação.

// const numero = 234
// const numeroString = '234'

// console.log(numero === numeroString)
// console.log(numero == numeroString)

//console.log(numero + numeroString)

//conversao explicita
//Number() converte uma string em numero. Também pode ser usado o + antes da variável conforme exemplo abaixo   
//console.log(numero + Number(numeroString))

// conversão de numero para string para fazer concatenação
// let telefone = 12341234;
// console.log("O telefone é " + String(telefone));

// let telefone = 12341234;
// console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let largura = 10;
let altura = "10";
console.log(+ largura + + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

// let usuarioConectado = false;
// console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
// usuarioConectado = true;
// console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.