let btn = window.document.querySelector('.btn');

btn.addEventListener('click', function(){
    let num = window.prompt('Digite um número:');
    res = window.document.querySelector('.resultado');

    res.innerHTML = `O número a ser analisado aqui será o <strong>${num}</strong> <hr>
    <p>O seu valor absoluto é ${num}</p>
    <p>A sua parte inteira é ${parseInt(num)}</p>
    <p>O valor inteiro mais próximo é ${Math.round(num)}</p>
    <p>A sua raíz quadrada é ${Math.sqrt(num)}</p>
    <p>A sua raíz cúbica é ${Math.cbrt(num)}</p>
    <p>O valor de ${num}<sup>2</sup> é ${num**2}</p>
    <p>O valor de ${num}<sup>3</sup> é ${num**3}</p>
    `;
    
})