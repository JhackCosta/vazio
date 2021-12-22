class AnotacaoModel {

    constructor(valor) {

        this.valor = valor
    }

    valorAdicionar(iten) {

        this.valor.push(iten)

        return this.valor

    }

}