/* 
 * 2 - Condições: Escreva um programa que verifique a validade de uma senha fornecida pelo
    usuário. A senha válida é o número 1234.
    Devem ser impressas as seguintes mensagens:
    ACESSO PERMITIDO caso a senha seja válida.
    ACESSO NEGADO caso a senha seja inválida.
*/

// Versão que pode ser utilizada em compiladores que possuem a interface prompt
function senhaValida(senha) {
  if (parseInt(senha) == 1234) return true
  return false
}

let senha = prompt("Digite sua senha: ")

senhaValida(senha) ? console.log("ACESSO PERMITIDO") : console.error("ACESSO NEGADO")
