class AnotacaoesController {

    constructor() {
        this.arr = []

    }

    addAnotacao() {

        let model = new AnotacaoModel(this.arr)

        let view = new AnotacaoView()

        view.renderizaAnotacao(model.valorAdicionar($('#escreve').val()))
    }




}