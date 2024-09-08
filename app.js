function pesquisar() {
        let section = document.getElementById("resultados-pesquisa");
        let campoPesquisa = document.getElementById("campo-pesquisa").value;

        // Verifica se o campo de pesquisa está vazio
        if (campoPesquisa === "") {
                section.innerHTML = "<p>Nada foi encontrado, verifique sua busca e tente novamente</p>";
                return;
        }

        // Converte o valor de pesquisa para minúsculas
        campoPesquisa = campoPesquisa.toLowerCase();

        let resultados = "";
        let titulo = "";
        let autor = "";
        let anoPublicacao = "";
        let genero = "";
        let idiomaOriginal = "";
        let sinopse = "";
        let temas = "";

        // Itera sobre os dados para encontrar correspondências
        for (let dado of dados) {
                titulo = dado.titulo.toLowerCase();
                sinopse = dado.sinopse.toLowerCase();
                temas = dado.temas.join(" ").toLowerCase(); // Converte o array de temas em uma string
                autor = dado.autor.toLowerCase();
                anoPublicacao = dado.anoPublicacao;
                genero = dado.genero.toLowerCase();
                idiomaOriginal = dado.idiomaOriginal.toLowerCase();

                // Verifica se o título, sinopse ou temas incluem o valor pesquisado
                if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || temas.includes(campoPesquisa)) {
                        resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <h3><strong>Autor:</strong> ${dado.autor}</h3>
                        <p><strong>Ano de Publicação:</strong> ${dado.anoPublicacao}</p>
                        <p><strong>Gênero:</strong> ${dado.genero}</p>
                        <p class="sinopse-meta">${dado.sinopse}</p>
                        <p><strong>temas:</strong> ${dado.temas}</p>
                    </div>
                `;
                }
        }

        // Exibe os resultados ou mensagem de "nada foi encontrado"
        if (resultados) {
                section.innerHTML = resultados;
        } else {
                section.innerHTML = "<p>Nada foi encontrado</p>";
        }
}