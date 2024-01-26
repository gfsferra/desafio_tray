/*
 * 5 - Objetos: Crie um objeto que represente um filme, com propriedades para título, autor e tempo de duração. Imprima cada propriedade no console.
*/

const filme = new Object();

filme.titulo = "Harry Potter e a Pedra Filosofal"
filme.autor = "J. K. Rowling"
filme.tempo = 152

let duracao = `${Math.floor(filme.tempo / 60)} horas e ${filme.tempo % 60} minutos`

console.log(`Título: ${filme.titulo}\nAutor(a): ${filme.autor}\nDuração: ${duracao}`)