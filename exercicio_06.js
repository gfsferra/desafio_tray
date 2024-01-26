/* 
 * 6 - Manipulação de Strings: Escreva um programa que receba uma palavra (string) e
    calcule quantas vogais (a, e, i, o, u) possui essa palavra. Entre com um caractere (vogal ou
    consoante) e substitua todas as vogais da palavra dada por esse caractere.
*/

const palavra = "testa"
let letra = "x"

console.log(`Quantidade de vogais: ${palavra.match(/[aeiou]/g || []).length}`)
console.log(`Nova palavra: ${palavra.replace(/[aeiou]/g, letra)}`)