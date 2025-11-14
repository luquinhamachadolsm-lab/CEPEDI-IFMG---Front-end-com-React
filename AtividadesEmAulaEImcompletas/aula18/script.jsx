class Pessoa {
    #nome; #cpf;
    constructor(nome, cpf) {
        this.#nome = nome
        this.#cpf = cpf
    }
    get nome() { return this.#nome }
    apresentar() {
        console.log(`meu nome é ${this.#nome}`)
    }
}
let objetoPessoa = new Pessoa("Ana","123")
console.log(objetoPessoa.nome)
objetoPessoa.apresentar()

class Aluno extends Pessoa {
    #matricula; #curso;
    
    constructor(nome, cpf, matricula, curso) {
        super(nome, cpf)
        this.#matricula = matricula;
        this.#curso = curso;
    }
    get curso(){
        return this.#curso;
    }
    apresentar() {
        super.apresentar()
        console.log(`Sou um aluno`)
    }
}
let objetoAluno = new Aluno("Bia", "456", "2025502", "react")
objetoAluno.apresentar()
console.log(`curso: ${objetoAluno.curso}`)