let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let num = window.prompt('Digite um número:');
    res = window.document.querySelector('.resultado');

    res.innerHTML = `O número a ser analisado aqui será o <strong>${num}</strong>`
    const newHr = document.createElement("hr");
    document.body.appendChild(newHr);
    
})