export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor (){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }


    adiciona (){


        const negociacao = new NegociacaoController (
            this.inputData.value
            this.inputQuantidade.value
            this.inputValor.value
        );
       console.log(negociacao)
    }
}
