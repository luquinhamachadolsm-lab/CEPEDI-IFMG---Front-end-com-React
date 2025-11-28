class ValorNegativoError extends Error {
    constructor() {
        super("o numero deve ser positivo")
        this.name = "valorNegativoError"
    }

}
function calcularRaiz(valor) {
    if (valor < 0) {
        throw new ValorNegativoError()
    }
    return Math.sqrt(valor)
}

try {
    console.log(calcularRaiz(-9))
} catch (erro) {
    console.log("erro capturado "+ erro.message)
}