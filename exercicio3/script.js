const somar  = (numero1, numero2) => {
    const soma = numero1 + numero2
    return soma
    
}

const subtrair  = (numero1, numero2) => {
    const subtracao = numero1 - numero2
    return subtracao
    
}

const multiplicar  = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2
    return multiplicacao
    
}

const dividir  = (numero1, numero2) => {
    const divisao = numero1 / numero2
    return divisao
    
}

let numero1User = Number(prompt('Digite um número :'))
let numero2User = Number(prompt('Digite um outro número :'))

const opSomar = somar(numero1User, numero2User)
const opSubtrair = subtrair(numero1User, numero2User)
const opMultiplicar = multiplicar(numero1User, numero2User)
const opDivir = dividir(numero1User, numero2User)

console.log(`
O resultado da soma de ${numero1User} + ${numero2User} é de :
${opSomar}
O resultado da subtração de ${numero1User} - ${numero2User} é de :
${opSubtrair}
O resultado da multiplicação de ${numero1User} * ${numero2User} é de :
${opMultiplicar}
O resultado da divisão de ${numero1User} / ${numero2User} é de :
${opDivir}
`)