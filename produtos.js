function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(produto) {
    console.log(produto)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = produto.id
    tdNome.innerHTML = produto.nome
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    

    return linha;
}

function main() {
    let data = fazGet("http://localhost:8080/produtos");
    let produtos = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    produtos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()