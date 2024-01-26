/* 
 * 2 - Condições: Escreva um programa que verifique a validade de uma senha fornecida pelo
    usuário. A senha válida é o número 1234.
    Devem ser impressas as seguintes mensagens:
    ACESSO PERMITIDO caso a senha seja válida.
    ACESSO NEGADO caso a senha seja inválida.
*/

// Versão que pode ser utilizada no terminal node.js
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua senha: ', function (senha) {
  senha == '1234' ? console.log("ACESSO PERMITIDO") : console.error("ACESSO NEGADO")
  rl.close();
});
