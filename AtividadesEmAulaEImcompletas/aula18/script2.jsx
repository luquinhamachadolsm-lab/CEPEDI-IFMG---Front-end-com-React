class Animal {
    #nome; #numero;
    constructor(nome, numero){
        this.#nome = nome
        this.#numero = numero
    }
    emitirSom() {
        return console.log("som genérico")
    }
    get nome(){
        return this.#nome
    }
}
class Cachorro extends Animal {
    #nome; #numero;
    constructor(nome, numero){
        super(nome, numero)
        this.#nome = nome
        this.#numero = numero
    }
    emitirSom() {
        return console.log("au au")
    }
}

let cachorro1 = new Cachorro("montanha", "4")
cachorro1.emitirSom()

class Gato extends Animal {
    #nome; #numero;
    constructor(nome, numero){
        super(nome, numero)
        this.#nome = nome
        this.#numero = numero
    }
    emitirSom() {
        return console.log("miau")
    }
}

let gato1 = new Gato("alfreda","4")
gato1.emitirSom()

class Passaro extends Animal {
    #nome; #numero;
    constructor(nome, numero){
        super(nome, numero)
        this.#nome = nome
        this.#numero = numero
    }
    emitirSom() {
        return console.log("guluglu")
    }
}

let passaro1 = new Passaro("pitirilo","2")
passaro1.emitirSom()

let i
let listaAnimais = []
listaAnimais.push = "cachorro"
listaAnimais.push = "gato"
listaAnimais.push = "passaro"
while(i!=-1){
    escolha = Number(prompt("escolha uma das opções:/n 1.Cadastrar Cachorro /n 2.Cadastrar gato /n 3.Cadastrar pássaro /n 4.Cadastrar outro animal /n 5.Listar animais /n 6.emitir sons de todos os animais"))
    if(escolha==1) {
        let nomeCachorro = prompt("Digite o nome do cachorro")
        listaAnimais.push = nomeCachorro
    }
    else if (escolha==2) {
        let nomeGato = prompt("escolha o nome do cachorro")
        listaAnimais.push = nomeGato
    }
    else if (escolha==3) {
        let nomePassaro = prompt("escolha o nome do passaro")
        listaAnimais.push = nomePassaro
    }
    else if (escolha==4) {
        let nomePassaro = prompt("escolha o nome do passaro")
        listaAnimais.push = nomePassaro
    }
    else if (escolha ==5) {
        console.log(listaAnimais)
    }
    else if (escolha==6) {
        console.log(Cachorro.emitirSom(), Gato.emitirSom(), Passaro.emitirSom())
    }
}

