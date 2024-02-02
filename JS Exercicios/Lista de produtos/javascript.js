// Desafio - Lista de Produtos

const produtos = [  {nome:"Computador",categoria:"Tecnologia",preco:"1.249.00"},
                    {nome:"Telemóvel",categoria:"Tecnologia",preco:"879.00"},
                    {nome:"TV",categoria:"Tecnologia",preco:"399.00"},
                    {nome:"T-shirt",categoria:"Roupa",preco:"19.99"}
                ]


let produtoTabela = document.getElementById("produtoLista");

for(i=0;i<produtos.length;i++){
    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosPreco = document.createElement('td');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
    produtoTabela.appendChild(produtoTabelaLinha)
}