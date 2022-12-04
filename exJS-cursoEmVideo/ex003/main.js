let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let nome = window.prompt('Qual é o seu nome?');
    window.alert(`Olá, ${nome}! é um prazer te conhecer!`)
})