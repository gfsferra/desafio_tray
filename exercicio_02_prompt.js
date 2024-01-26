/* 
 * 2 - Condições: Escreva um programa que verifique a validade de uma senha fornecida pelo
    usuário. A senha válida é o número 1234.
    Devem ser impressas as seguintes mensagens:
    ACESSO PERMITIDO caso a senha seja válida.
    ACESSO NEGADO caso a senha seja inválida.
*/

// Versão que pode ser utilizada em compiladores que possuem a interface prompt
function passwordValid(password) {
  if (parseInt(password) == 1234) return true
  return false
}

let userPassword = prompt("Digite sua senha: ")

passwordValid(userPassword) ? console.log("ACESSO PERMITIDO") : console.error("ACESSO NEGADO")
