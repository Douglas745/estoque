// Carregar produtos do Firestore
db.collection('produtos').get().then(snapshot => {
    const produtosLista = document.getElementById('produtos-lista');
    const produtos = [];
    snapshot.forEach(doc => {
        const produto = doc.data();
        produto.id = doc.id;
        produtos.push(produto);
        produtosLista.innerHTML += `
            <tr>
                <td>${produto.material}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td>
                    <a href="editar.html?id=${produto.id}">Editar</a> |
                    <a href="#" onclick="excluirProduto('${produto.id}')">Excluir</a>
                </td>
            </tr>
        `;
    });

    // Gráfico de produtos
    const ctx = document.getElementById('graficoProdutos').getContext('2d');
    const materiais = produtos.map(p => p.material);
    const quantidades = produtos.map(p => p.quantidade);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nomes,
            datasets: [{
                label: 'Quantidade de Produtos',
                data: quantidades,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        }
    });
});

function excluirProduto(id) {
    db.collection('produtos').doc(id).delete().then(() => {
        window.location.reload();
    });
}