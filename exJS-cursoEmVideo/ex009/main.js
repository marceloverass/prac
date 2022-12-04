btn1 = window.document.querySelector('.btn1');
btn2 = window.document.querySelector('.btn2');
let contador = 0;
let res = window.document.querySelector('.resultado');
res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`;

btn1.addEventListener('click', function() {
    contador++;
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`;
})

btn2.addEventListener('click', function() {
    contador = 0;
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques.`;
})