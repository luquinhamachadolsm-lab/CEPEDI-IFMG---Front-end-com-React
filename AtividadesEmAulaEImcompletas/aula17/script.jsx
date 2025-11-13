class Pessoa {
    #nome
    #endereco
    constructor(nome, endereco) {
        this.#nome = nome
        this.#endereco = endereco
    }
    ObterNome(){
        return console.log(this.#nome)
    }
    ObterEndereco(){
        return console.log(this.#endereco)
    }
    ModificarEnd(){
        this.#endereco = prompt("informe o novo endereço:")
    }
    GetInfo(){
        return console.log(`o nome é ${this.#nome} e o endereço é ${this.#endereco}`)
    }
    
}
let p1 = new Pessoa("CoNECTA","contagem")
console.log(p1.nome)
let p2 = new Pessoa("pessoa 2","sarzedo")
console.log(p2.nome)
p1.GetInfo()
p2.ObterEndereco()
