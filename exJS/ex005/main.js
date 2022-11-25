alert('Seja bem-vindo(a) ao meu site!');

let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let num = window.prompt('Digite um número:');
    let resultado = window.document.querySelector('.resultado');
    resultado.innerHTML = `O dobro de ${num} é ${num*2} e a metade é ${num/2}`;
})