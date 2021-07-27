function fazGet(url, nome) {
    let request = new XMLHttpRequest();
    request.open("GET", url, nome, false);
    request.send();
    return request.responseText;
}

function cardsProduto(produtos) {
    console.log("building cards...");
    return `
    <img src="img/alface.png " class="card-img-top " alt="... ">
    <div class="card-body ">
    <p class="card-text " " id="id">${produtos.id} </p>
        <h5 class="card-title " id="name">${produtos.nome}</h5>
        <p class="card-text " " id="preco">${produtos.preco} </p>
        <p class="card-text " id="pagamentos">${produtos.vendedor.pagamento}</p>
        <p class="card-text " id="nomeVendedor">${produtos.vendedor.nomeVendedor}</p>
        <p class="card-text " id="endereco">${produtos.vendedor.endereco}</p>
        <p class="card-text " id="cidade">${produtos.vendedor.cidade}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalNum${produtos.id}">Comprar</button>        
    

    <!-- Modal -->
    <div class="modal fade" id="modalNum${produtos.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${produtos.nome}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="col-6 col-md-2">
          <form id="frmNumber">
              <div>
                  <label for="numero">Informe a quantidade:</label>
                  <input type="number" id="numero" name="numero" min="0" max="200">
              </div>

          </form>
         <p>Vendedor: ${produtos.vendedor.nomeVendedor}</label>
        <p>cidade: ${produtos.vendedor.cidade}</p>
        <p>endereco: ${produtos.vendedor.endereco}</p>
        <p>${produtos.vendedor.pagamento}</p>
         <p>preço: <b>${produtos.preco}</b></p>
        

              <script>
                  document.getElementById("frmNumber").onsubmit = function() {
                      let frmNr = document.getElementById('frmNumber').elements;
                      document.getElementById("resultado").innerHTML = "Você digitou: " + frmNr['numero'].value;
                      return false;
                  };
              </script>



      </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
`;
}

function main() {
    //pode ser qualquer nome
    fetch(`http://localhost:3000/ofertas`)
        .then((balinha) => balinha.json())
        .then((data) => {
            const ofertas = document.getElementById("conteudo");

            for (const product of data) {
                var div = document.createElement("div");
                div.className = "card"
                div.innerHTML = cardsProduto(product);
                ofertas.appendChild(div);
            }
        });
}
main();