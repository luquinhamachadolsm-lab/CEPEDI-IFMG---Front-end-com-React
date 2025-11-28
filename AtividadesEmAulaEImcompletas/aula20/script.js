//console.log(nome)
//let valor = 10/0
//console.log(valor)
//let valor2 = Number("abc")
//console.log(valor2)
//let n = 10
//console.log(n.toUpperCase())
//let numeros = [10.123, 20.456, 30.789]
//console.log(numeros[3].toFixed(2))

let nome = "ifmg"
console.log("inicio do programa")
try {
    console.log(nome)
} catch (erro) {
console.log("Houve um erro: "+ erro.name + erro.message)
} finally {
    console.log("fim do try-catch")
}
console.log("fim do programa")
