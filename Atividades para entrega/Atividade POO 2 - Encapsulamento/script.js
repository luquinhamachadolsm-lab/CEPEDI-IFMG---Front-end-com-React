let a
let b
let saldo
let positivo = []
let negativo = []
class Conta {
    #saldo ; #titular
    constructor(saldo, titular) {
        this.#saldo = saldo
        this.#titular = titular
    }
    depositar(){
        a = Number(prompt("quanto deseja depositar?"))
        this.#saldo = this.#saldo + a
        positivo.push(a)
        
        console.log(`Depósito realizado. Seu saldo atual é de: ${this.#saldo}`)
    }
    sacar(){
        b = Number(prompt("quanto deseja sacar?"))
        this.#saldo = this.#saldo - b
        negativo.push(b)
        if(this.#saldo < 0){
            console.log("Saldo insuficiente para saque.")
        }
        else 
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
conta1.depositar()
conta1.sacar()
conta1.consultar()
conta1.depositar()
conta1.sacar()
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
