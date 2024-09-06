function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria uma nova div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Saiba mais</a> </div>
        `;
    }

    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
}



