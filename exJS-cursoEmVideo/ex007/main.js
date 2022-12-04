let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let nome = window.prompt('Qual é o nome do aluno?');
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`));
    let soma = nota1 + nota2;
    let res = window.document.querySelector('.resultado');

    res.innerHTML = `
        <p>Calculando a média final de <mark>${nome}</mark>.</p>
        <p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>
        <p>A média final será <mark>${(nota1+nota2)/2}</mark>.</p>
    `;
})