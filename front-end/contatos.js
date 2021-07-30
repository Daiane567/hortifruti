async function putData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
}
var id;

function vendedor() {
    const id = localStorage.getItem("id");
    let nomeVendedor = document.getElementById("nomeVendedor").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let telefone = document.getElementById("telefone").value;
    let pagamento = document.getElementById("pagamento").value;

    putData(`http://localhost:3000/usuarios`, {
            id: id,
            nomeVendedor: nomeVendedor,
            endereco: endereco,
            cidade: cidade,
            telefone: telefone,
            pagamento: pagamento,
        })
        .then((data) => {
            window.location.href = "./informacoesProduto.html";

            console.log(data); // JSON data parsed by `data.json()` call
        })
        .catch((error) => {
            console.error(error);
        });
}

function fazGet(url, nome) {
    let request = new XMLHttpRequest();
    request.open("GET", url, nome, false);
    request.send();
    return request.responseText;
}

function retornar(produtos) {
    const meuHtml = `
     
                  <div class="card mb-3" style="max-width: 80%;">
  
                      <div class="row g-0">
                          <div class="col-md-4">
                              <img src="img/beterraba.png" class="img-fluid rounded-start" id="mgf" alt="...">
                          </div>
                          <div class="col-md-8">
                              <div class="row g-0">
                                  <div class="col-sm-6 col-md-7">
                                      <div class="card-body" id="card">
                                          <h5 class="card-title">${produtos.nome} ${produtos.medidas}</h5>
                                          <p class="card-text">
                                         <p id="nomeVendedor">vendedor:${produtos.vendedor.nomeVendedor} </p>
                                          <p class="card-text " id="endereco">Endereço:${produtos.vendedor.endereco}</p>
                                          <p class="card-text " id="cidade">${produtos.vendedor.cidade}</p>

                                          <p>Obs:  ${produtos.descricao} </p>
  
                                          </p>
  
                                      </div>
                                  </div>
                                  <div class="col-6 col-md-2" id="coluna">
                                      <p> Remover:</p>
                                      <input type="image" id="buttondf" src="img/remover.png" />
  
                                  </div>
  
                                  <div class="col-6 col-md-3">
                                      <label for="inputPassword6" class="col-form-label" id="preco">Preço: R$ ${produtos.preco}  </label>
                                      <p id="p"> Quantidade: ${produtos.quantidade} </p>
                                      <div class="dropdown" id="menu">
                                          <button class="btn bg dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                          
                                                                         </button>
                                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                              <li><button class="dropdown-item" type="button">1</button></li>
                                              <li><button class="dropdown-item" type="button">2</button></li>
                                              <li><button class="dropdown-item" type="button">3</button></li>
                                          </ul>
                                      </div>
  
                                  </div>
                              </div>
  
                          </div>
                      </div>
                  </div>  
          
      
  `;
    console.log(produtos);
    return meuHtml;
}

function main() {
    const idVendedor = localStorage.getItem("id");
    fetch(`http://localhost:3000/produtos/` + idVendedor)
        .then((balinha) => balinha.json())
        .then((data) => {
            let meuHtml = "";

            for (const product of data.mensage) {
                console.log(product);
                meuHtml += retornar(product);
            }
            let card = document.getElementById("meusProdutos");
            card.innerHTML = meuHtml;
        });
}
main();