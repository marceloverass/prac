btn1 = document.querySelector('.btn1');
btn2 = document.querySelector('.btn2');
btn3 = document.querySelector('.btn3');
btn4 = document.querySelector('.btn4');
res = document.querySelector('.resultado')

btn1.addEventListener('click', function() {
    res.innerHTML += `<p>Clicou no primeiro botão</p>`;
    document.createElement('p');
    document.body.appendChild(res);
});

btn2.addEventListener('click', function() {
    res.innerHTML += `<p>Clicou no segundo botão</p>`;
    document.createElement('p');
    document.body.appendChild(res);
});

btn3.addEventListener('click', function() {
    res.innerHTML += `<p>Clicou no terceiro botão</p>`;
    document.createElement('p');
    document.body.appendChild(res);
});

btn4.addEventListener('click', function() {
    res.innerHTML += `<p>Clicou no quarto botão</p>`;
    document.createElement('p');
    document.body.appendChild(res);
})