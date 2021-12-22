class AnotacaoesController {

    constructor() {
        this.arr = []

    }

    addAnotacao() {

        let teste = new AnotacaoModel(this.arr)

        console.log(teste.valorAdicionar($('#escreve').val()))

    }



}