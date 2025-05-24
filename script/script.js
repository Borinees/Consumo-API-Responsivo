'use strict;' //Modo restrito

// Consumo de API ViaCEP
// viacep.com.br

// Função para limpar o formulario
const limparFormulario = (endereco) => {
    document.getElementById('cepText'),value = '';
    document.getElementById('adressText'),value = '';
    document.getElementById('numberText'),value = '';
    document.getElementById('complementText'),value = '';
    document.getElementById('emailText'),value = '';
    document.getElementById('neighborhoodText'),value = '';
    document.getElementById('cityText'),value = '';
}

// Função para preencher o formulario
const preencherFormulario = (endereco) => {
    document.getElementById('adressText').value = endereco.logradouro;
    document.getElementById('neighborhoodText').value = endereco.bairro;
    document.getElementById('cityText').value = endereco.localidade;
    document.getElementById('stateText').value = endereco.estado;
}

// Verifica se o CEP é valido Teste de regx www.regxpal.com
const eNumero = (numberText) => /^[0-9]+$/.test(numberText);

// Confere se o CEP tem o tamanho correto
const cepValido = (cepText) => cepText.length == 8 && eNumero(cepText);

//Consumo de API viaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cepText.value}/json/`;

    if(cepValido(cepText.value)){
        const dados = await fetch(url);
        const adress = await dados.json();

        if(adress.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        } else{
            preencherFormulario(adress);
        }
    } else{
        alert('CEP incorreto');
    }
}

document.getElementById('cepText').addEventListener('focusout',pesquisarCep);