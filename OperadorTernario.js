//sintaxe: console.log(condição ? true : false)
// vamos criar uma verificação se a pessoal é maior de idade e o que pode beber

const idade = 17;
const idadeMinima = 18;

// if (idade < idadeMinima) {
//     console.log("Suco")
// }
//     else {
//         console.log("Cerveja")
//     }

    //agora a mesma verificação com operador ternario
    console.log(idade < idadeMinima ? "Suco" : "Cerveja")