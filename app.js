function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero;
    let lista = [];

    for(let i = 0; i < quantidade; i++){
        numero = aleatorio(de, ate);
        
            while(lista.includes(numero)){
                numero = aleatorio(de,ate);
            }
        
        
        lista.push(numero);
    }if(de > ate){
        alert('Hummm, tem certeza? Revise sua aplicação!');
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${lista}</label>`;
    
}




function aleatorio(min, max){
    return Math.floor(Math.random() * (max + min + 1)) +min;
}


function zerar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    zerar();
}