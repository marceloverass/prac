let btn = document.querySelector('.btn');
let res = document.querySelector('.resultado');

btn.addEventListener('click', function() {
    let nome = prompt('Qual é o nome do aluno?');
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
    let media = (n1 + n2) / 2

    res.innerHTML = `
        <p>Calculando a média final de <mark>${nome}</mark>.</p>
        <p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.</p>
        <p>A média final é <mark>${media}</mark></p>
    `

    if (media >= 6) {
        par = document.createElement('p');
        par.innerHTML = `A mensagem que temos é: <span>Meus parabéns!</span>`;
        document.body.appendChild(par);
    }
    
    if (media <= 5.9) {
        par = document.createElement('p');
        par.innerHTML = `A mensagem que temos é: <span>Estude um pouco mais!</span>`;
        document.body.appendChild(par);
    }

})

