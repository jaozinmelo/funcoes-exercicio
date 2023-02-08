// a)
const comprimentar = (nome) => {
const frase = `Olá, ${nome}!`
console.log(frase)
}
const nome = prompt('Qual o seu nome?')
comprimentar(nome)
//b)
/* function executarTabuada(numero){
    

    const tabuada = `
    ${numero * 1}
    ${numero * 2}
    ${numero * 3}
    ${numero * 4}
    ${numero * 5}
    ${numero * 6}
    ${numero * 7}
    ${numero * 8}
    ${numero * 9}
    ${numero * 10}
    `
    return tabuada
}
console.log(executarTabuada(4))
console.log(executarTabuada(5))
console.log(executarTabuada(6))
console.log(executarTabuada(7))
console.log(executarTabuada(8))
 */

//c
const tabuada = (numero) => {
    const x1 = numero * 1
    const x2 = numero * 2
    const x3 = numero * 3
    const x4 = numero * 4
    const x5 = numero * 5
    const x6 = numero * 6
    const x7 = numero * 7
    const x8 = numero * 8
    const x9 = numero * 9
    const x10 = numero * 10
    
    console.log(`
    A tabuada de ${numero} é :
   ${numero}x1 = ${x1}
   ${numero}x2 = ${x2}
   ${numero}x3 = ${x3}
   ${numero}x4 = ${x4}
   ${numero}x5 = ${x5}
   ${numero}x6 = ${x6}
   ${numero}x7 = ${x7}
   ${numero}x8 = ${x8}
   ${numero}x9 = ${x9}
   ${numero}x10 = ${x10} 
    `
 )
}
const numero =prompt('Saiba a tabuada de 1 a 10 do numero:')
tabuada(numero)

















/* const executarTabuadaArrowFun = (numero) => {
    const tabuada = `
    ${numero * 1}
    ${numero * 2}
    ${numero * 3}
    ${numero * 4}
    ${numero * 5}
    ${numero * 6}
    ${numero * 7}
    ${numero * 8}
    ${numero * 9}
    ${numero * 10}
    `
    return tabuada
}
console.log(executarTabuadaArrowFun(2)) */
/* console.log(executarTabuadaArrowFun(4))
console.log(executarTabuadaArrowFun(6)) */