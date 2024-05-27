function viaCep(){

    let cep = document.querySelector('#cep').value;
    let url =  `https://viacep.com.br/ws/${cep}/json/`;
    
    if(cep.length !== 8){
        alert('Cep Invalído');
        return;
    }
    
    fetch(url) // fetch busca a url, os then significa então, transformando em json
    .then(function(response){
        response.json()
        .then(busca);
    });
    
    }
    
    
    function busca(dados){
    let mostra = document.querySelector('#resultado')
    if(dados.erro){
        mostra.innerHTML = "Não foi possível localizar endereço"
    }
    else{

        mostra.innerHTML = `<p>Endereço: ${dados.logradouro}<p>
        <p>Complemento: ${dados.complemento}<p>
        <p>Bairro: ${dados.bairro}<p>
        <p>Localidade: ${dados.localidade}<p>
        <p>IBGE: ${dados.ibge}<p>`
        
    }
   
                     
                       
    
    }