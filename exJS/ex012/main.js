btn = document.querySelector('.btn');
res = document.querySelector('.resultado');

btn.addEventListener('click', function() {
    let n1 = Number(prompt('Digite um número:'));
    
    if (n1 % 2 === 0) {
        res.innerHTML = `O número ${n1} é <strong>PAR!</strong>`;
    } else {
        res.innerHTML = `O número ${n1} é <strong>ÍMPAR!</strong>`;
    }
})