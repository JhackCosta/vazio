class AnotacaoModel {

    constructor(valor) {

        this.valor = valor
    }

    valorAdicionar(iten) {

        const Anotacao = {
            titulo: iten
        }

        this.valor.push(Anotacao)

        return Anotacao

    }

}