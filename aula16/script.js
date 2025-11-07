class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar() {
        console.log("olá, meu nome é " +this.nome+" e tenho "+ this.idade+" anos")
    }
}

let p1 = new Pessoa("lucas", 19)
let p2 = new Pessoa("reis", 18)
console.log(p1.nome+"-->"+p1.idade)
p1.apresentar()
p2.apresentar()