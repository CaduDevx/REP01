// Alerta de remádios

// REMADIOS E HORARIOS

const Suplemento = "08:00";
const Antibiótico_1 = "10:00";
const Antibiótico_2 = "22:00";
const Chá = "21:00";
let HORARIOS = "22:00";

if ( HORARIOS === Suplemento)
    {
    console.log("São " + Suplemento + " é hora de tomar o Suplemento")
}
    else if (HORARIOS === Antibiótico_1)
    {
    console.log("São " + Antibiótico_1 + " é hora de tomar o Antibiótico")
} 
    else if (HORARIOS === Antibiótico_2)
    {
    console.log("São " + Antibiótico_2 + " é hora de tomar o Antibiótico")
}
    else if (HORARIOS === Chá)
    {
    console.log("São " + Chá + " é hora de tomar o Chá")
}
    else {console.log("Não está na hora de tomar remédio")
}