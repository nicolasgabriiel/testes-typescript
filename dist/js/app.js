import { NegociacaoController } from "./controllers/negociacao-controller.js";
console.log('aa');
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
