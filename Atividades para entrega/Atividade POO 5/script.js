let a
let b
let saldo
let positivo = []
let negativo = []
// Classes de erro personalizadas
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

class InsufficientFundsError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InsufficientFundsError'
    }
}
class Conta {
    #saldo ; #titular
    constructor(saldo, titular) {
        this.#saldo = saldo
        this.#titular = titular
    }
    depositar(){
        a = Number(prompt("quanto deseja depositar?"))
        if (Number.isNaN(a) || a <= 0) {
            throw new ValidationError('Valor de depósito inválido')
        }
        this.#saldo = this.#saldo + a
        positivo.push(a)
        console.log(`Depósito realizado. Seu saldo atual é de: ${this.#saldo}`)
    }
    sacar(){
        b = Number(prompt("quanto deseja sacar?"))
        if (Number.isNaN(b) || b <= 0) {
            throw new ValidationError('Valor de saque inválido')
        }
        if (this.#saldo - b < 0) {
            throw new InsufficientFundsError('Saldo insuficiente para saque')
        }
        this.#saldo = this.#saldo - b
        negativo.push(b)
        console.log(`Saque realizado. Seu saldo atual é de: ${this.#saldo}`)
    }
    consultar(){
        return console.log(`Seu saldo é de:${this.#saldo}`)
    }
    histpositivo(){
        return console.log(`Histórico de depósitos: ${positivo}`)
    }
    histnegativo(){
        return console.log(`Histórico de saques: ${negativo}`)
    }
}
let conta1 = new Conta(1000, "João")
try {
    conta1.depositar()
} catch (e) {
    if (e instanceof ValidationError) {
        console.error('Erro de validação no depósito:', e.message)
    } else {
        console.error('Erro desconhecido ao depositar:', e)
    }
}

try {
    conta1.sacar()
} catch (e) {
    if (e instanceof ValidationError) {
        console.error('Erro de validação no saque:', e.message)
    } else if (e instanceof InsufficientFundsError) {
        console.warn('Saque não permitido:', e.message)
    } else {
        console.error('Erro desconhecido ao sacar:', e)
    }
}

conta1.consultar()

// mais interações demonstrativas com tratamento
try {
    conta1.depositar()
    conta1.sacar()
} catch (e) {
    console.error('Erro durante operações adicionais:', e)
}

conta1.histpositivo()
conta1.histnegativo()

// simulação 
// exibir saldo inicial -> conta1.consultar()
//deposite 500 -> conta1.depositar()
//exibir saldo atualizado -> conta1.consultar()
//retirar 200 -> conta1.sacar()
//exibir saldo atualizado -> conta1.consultar()
//retirar 1000 -> conta1.sacar()
//exibir saldo atualizado -> conta1.consultar()
