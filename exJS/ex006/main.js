let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let n1 = window.prompt('Digite um número:');
    let n2 = window.prompt('Digite outro número:'); 
    let n1Formatado = Number(n1);
    let n2Formatado = Number(n2);
    let res = window.document.querySelector('.resultado');
    let soma = n1Formatado + n2Formatado;
    res.innerHTML = `A soma entre ${n1Formatado} e ${n2Formatado} é igual a <strong>${soma}</strong>`;
    n1Formatado.style.background = 'yellow'
})