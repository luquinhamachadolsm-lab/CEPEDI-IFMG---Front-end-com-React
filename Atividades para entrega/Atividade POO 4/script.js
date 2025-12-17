class Empresa {
    #nome; #departamentos;
    constructor(nome) {
    this.#nome = nome;
    this.#departamentos = [];
    }
    get nome () { return this.#nome; }
    adicionarDepartamento(departamentos) {
        this.#departamentos.push(departamentos)
    }
    listarDepartamentos(){
        console.log(this.#departamentos)
    }
    
}
class Empregado {
    #nome; #empresa
    constructor(nome, empresa) {
    this.#nome = nome;
    this.#empresa = empresa;
    }
    info() { console.log(`${this.#nome} trabalha na empresa ${this.#empresa.nome}.`); }
    }
objetoEmpresa = new Empresa("IFMG");
empregadoObjeto = new Empregado("Lucas", objetoEmpresa);
empregadoObjeto.info();

class Departamento {
    #nome;
    constructor(nome) { this.#nome = nome; }
    get nome () { return this.#nome; }
}
objetoDepart = new Departamento("Manutenção")
console.log(objetoDepart.nome)

class Endereco {
    #logradouro; #numero; #bairro; #cidade; #estado; #cep;
    constructor(logradouro, numero, bairro, cidade, estado, cep){
        this.#logradouro = logradouro
        this.#numero = numero
        this.#bairro = bairro
        this.#cidade = cidade
        this.#estado = estado
        this.#cep = cep
    }
}

class Pessoa {
    #nome; #cpf; #endereco;
    constructor(nome, cpf, endereco) {
        this.#nome = nome
        this.#cpf = cpf
        this.#endereco = new Endereco(endereco)
    }
}

/////

objetoDepart1 = new Departamento("TI")
objetoDepart2 = new Departamento("RH")
objetoDepart3 = new Departamento("FINANÇAS")

objetoEmpresa.adicionarDepartamento(objetoDepart1)
objetoEmpresa.adicionarDepartamento(objetoDepart2)
objetoEmpresa.adicionarDepartamento(objetoDepart3)
objetoEmpresa.listarDepartamentos()