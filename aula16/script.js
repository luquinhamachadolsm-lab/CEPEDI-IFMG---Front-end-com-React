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
//---------------------------------------------------------------------------------



class Retangulo {
    constructor(nome, largura, altura){
        this.nome = nome,
        this.largura = largura,
        this.altura = altura
    }
    obterNome(){
        console.log("nome="+this.nome)
    }
    calcularPerimetro(){
        let p = (this.largura*2)+(this.altura*2)
        console.log("perímetro:"+p)
    }
    calcularArea(){
        let a = (this.largura*this.altura)
        console.log("área:"+a)
    }
    atualizarLargura(novaLargura){
        this.largura = novaLargura
        console.log("agora a largura é de:"+this.largura)
    }
    atualizarAltura(novaAltura){
        this.altura = novaAltura
        console.log("agora a altura é de:"+this.altura)
    }

}
let r1 = new Retangulo("ret1", 10, 20)
r1.obterNome()
r1.calcularPerimetro()
r1.calcularArea()
r1.atualizarLargura(5)
r1.atualizarAltura(10)
r1.calcularArea()

//-----------------------------------------------

class aluno {
    constructor(nome, notas){
        this.nome = nome
        this.notas = notas
    }
    obterNome(){
        console.log("nome do aluno:"+this.nome)
    }
    adicionarNota(nota){
        this.notas = nota
        console.log("adicionado a a nota "+this.notas)

    }
    calcularMedia(){
        let m = this.notas * this.notas
        console.log("a média das notas é de:"+m)
    }
}
let alu1 = new aluno("hugo", 5)
alu1.obterNome()