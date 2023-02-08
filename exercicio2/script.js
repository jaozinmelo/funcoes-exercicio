//a)
const somar = (numero1, numero2) => {
    const soma = numero1 + numero2
    console.log(`O resulado da soma de ${numero1} + ${numero2} é : ${soma}`)
}
somar(10,40)
somar(15,40)


//b)
const relacionarMaiorOuIgual = (numero1, numero2) => {
    const maiorOuIgual = numero1 >= numero2
    console.log(`${numero1} é maior ou igual ao ${numero2} ? ${maiorOuIgual}`)
}
relacionarMaiorOuIgual(4,6)
relacionarMaiorOuIgual(8,6)


//c)
const ehPar = (numero) => {
const resto = numero % 2 === 0
const conclusao = `O numero ${numero} é Par ? ${resto}`
console.log(conclusao)
}
ehPar(4)


//d) ** refazer para melhor entendimento
const salarioDescontadoInss = (salarioBruto) => {
    const inss = salarioBruto * 0.1
    const salarioFinal = salarioBruto - inss
    const operacaoSalarioDescontado = (`
    O salario bruto é : ${salarioBruto}
    O valor do Inss é : ${inss}
    O salario final já descontado é : ${salarioFinal}
    `)
    return operacaoSalarioDescontado
}
console.log(salarioDescontadoInss(5000))
