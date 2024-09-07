function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa e remove espaços em branco no início e no fim
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem e encerra a função.
    if (/^\s*$/.test(campoPesquisa)) {
    section.innerHTML = "<span class='mensagem-vazia'>Busca vazia.</span>";
    return;
    }

    // Converte o termo de pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item nos dados
    for (let dado of dados) {
      // Converte o título, sinopse e tags para minúsculas para facilitar a comparação
    let titulo = dado.titulo.toLowerCase();
    let sinopse = dado.sinopse.toLowerCase();
    let tags = dado.tags.toLowerCase();

      // Verifica se o termo de pesquisa está contido no título, sinopse ou tags
    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria o HTML para exibir o resultado da pesquisa
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="sinopse">${dado.sinopse}</p>
            <a href="${dado.link}" target="_blank">Assistir</a>
        </div>
        `;
    }
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}