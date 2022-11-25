let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function (){
    let nome = window.prompt('Qual é o seu nome?');let resultado = window.document.querySelector('.resultado');
    resultado.innerHTML = `Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! 🖖`;
})