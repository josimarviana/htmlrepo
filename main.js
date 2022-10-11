function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(cliente) {
    console.log(cliente)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = cliente.id
    tdNome.innerHTML = cliente.nome
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    

    return linha;
}

function main() {
    let data = fazGet("http://localhost:8080/clientes");
    let clientes = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    clientes.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()