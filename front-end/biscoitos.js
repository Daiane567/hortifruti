function executar() {
    var texto = document.getElementById('texto').value;
    var lista = document.getElementById('historico');
    var adicionar = true;

    var opt = document.createElement('option');

    for (i = 0; i < lista.options.length; i++) {
        if (texto == lista.options[i].value) {
            adicionar = false;
        }
    }
    if (adicionar == true) {
        opt.value = texto;
        lista.appendChild(opt);
    }
}


function fazGet(url, nome) {
    let request = new XMLHttpRequest();
    request.open("GET", url, nome, false);
    request.send();
    return request.responseText;
}

function cardsProduto(produtos) {
    console.log("building cards...");
    return `
    <div>
    <img src="img/alface.png " class="imgg " alt="... ">
   
    <p id="id">${produtos.id} </p>
        <h5  id="name">${produtos.nome}  ${produtos.quantidades}  ${produtos.medidas}</h5>
        <p  id="preco">Preço: ${produtos.preco} </p>
        <p  id="pagamentos">Forma de pagamento: ${produtos.vendedor.pagamento}</p>
        <p  id="nomeVendedor">Vendedor: ${produtos.vendedor.nomeVendedor}</p>
        <p  id="endereco">Endereço: ${produtos.vendedor.endereco}</p>
        <p  id="cidade">Cidade: ${produtos.vendedor.cidade}</p>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalNum${produtos.id}">Comprar</button>        
   <div>
    <!-- Modal -->
    <div class="modal fade" id="modalNum${produtos.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">Confirmação</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p>Escolha a quantidade desse item</p>
          <div class="container">



          <div class="row g-0">
  <div class="col-sm-6 col-md-6">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0I0eEe-gPBvfHzgCBSf-X-8WqD91612ePw&usqp=CAU" class="card-img-top" alt="...">
  </div>
  <div class="col-6 col-md-6">
  <p>${produtos.nome} </p>
  <p>  <form id="frmNumber">
  <p>
      <label for="numero">Informe a quantidade:</label>
      <input type="number" id="numero" name="numero" min="0" max="200">
  </p>

</form></p>
  <p> <label for="preco" class="col-form-label">R$ ${produtos.preco}</label> 
  <script>
  document.getElementById("frmNumber").onsubmit = function() {
      let frmNr = document.getElementById('frmNumber').elements;
      document.getElementById("resultado").innerHTML = "Você digitou: " + frmNr['numero'].value;
      return false;
  };
</script>
  </p>

  </div>

                    <div class="modal-footer">
                    <button onclick="window.location.href = 'carrinhoCompra.html'"id="botaoo">Adicionar ao carrinho</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Voltar</button>

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