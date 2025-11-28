try {
    let a = Number(prompt("digite o valor de a:"))
    let b = Number(prompt("digite o valor de b"))
    let resultado = a/b
    if (isNaN(resultado)) {
        throw new Error("valores invalidos")
    }
    if (resultado == infinity || resultado == -infinity) {
        throw new Error("divisao por zero")
    }
    alert(resultado)
}catch(erro) {
    console.log("erro:"+ erro.name)
    console.log("detalhe:"+ erro.message)
}
