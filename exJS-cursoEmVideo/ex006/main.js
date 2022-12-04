let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let n1 = Number(window.prompt('Digite um número:'));
    let n2 = Number(window.prompt('Digite outro número:')); 
    let res = window.document.querySelector('.resultado');
    let soma = n1 + n2;
    res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>`;
})