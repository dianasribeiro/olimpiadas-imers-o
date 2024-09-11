function pesquisar(){
    
    
        // Seleciona a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");

        console.log(section); // Para fins de depuração, mostra a seção no console
    
        // Inicializa uma string vazia para armazenar o HTML dos resultados
        let resultados = "";
    
        // Itera sobre cada dado da lista de dados e cria o HTML correspondente
        for (let dado of dados) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        
    
        // Atualiza o conteúdo HTML da seção com os resultados gerados
        section.innerHTML = resultados;
    }

}

//console.log(dados); no lugar da Rayssa Leal poderiamos colocar ${dados[0].titulo} dentro do h2






           


