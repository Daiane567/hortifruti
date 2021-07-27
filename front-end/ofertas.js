function fazGet(url, nome) {
    let request = new XMLHttpRequest()
    request.open("GET", url, nome, false)
    request.send()
    return request.responseText
}

function retornar(produtos) {

    return `
    
    <div class="card ">
    <img src="img/alface.png " class="card-img-top " alt="... ">
    <div class="card-body ">
    <p class="card-text " " id="id">${produtos.id} </p>
        <h5 class="card-title " id="name">${produtos.nome} </h5>
        <p class="card-text " " id="preco">${produtos.preco} </p>
        <p class="card-text " id="pagamentos">${produtos.vendedor.pagamento}</p>
        <p class="card-text " id="nomeVendedor">${produtos.vendedor.nomeVendedor}</p>
        <p class="card-text " id="endereco">${produtos.vendedor.endereco}</p>
        <p class="card-text " id="cidade">${produtos.vendedor.cidade}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${produtos.id}">
  Launch demo modal
</button>        
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="${produtos.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
 </div>   
`

}



function main() { //pode ser qualquer nome
    fetch(`http://localhost:3000/ofertas`).then(balinha => balinha.json())
        .then(data => {
            let meuHtml = "";


            for (const product of data) {
                console.log(product)
                meuHtml += retornar(product);
            }
            let card = document.getElementById("conteudo")
            console.log(meuHtml)
            card.innerHTML = ` <div class="card-group mb-12 " id="conteudo">${meuHtml}</div>`;
        })



}
main()



function voltar(produtos) {
    for (var i = 0; i < produtos.length; i++) {
        const quantidade = produtos[i]
        if (quantidade < 1) {
            return `
            <div class="card-group mb-12 " id="conteudoo">
        
            <div class="card ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77jDZG9uuHUE17barcIW4C1Zk1M-Mr9vQ5g&usqp=CAU " class="card-img-top " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="name">${produtos.nome} </h5>
                <p class="card-text " " id="preco">${produtos.preco} </p>
                <p class="card-text " id="pagamentos">${produtos.vendedor.pagamento}</p>
                <p class="card-text " id="nomeVendedor">${produtos.vendedor.nomeVendedor}</p>
                <p class="card-text " id="endereco">${produtos.vendedor.endereco}</p>
                <p class="card-text " id="cidade">${produtos.vendedor.cidade}</p>
                <a class="nav-link active" id="carrinhocompraa" aria-current="page" href="popup.html" title="Meus itens"> <input type="image" id="modal-alerta" src="img/carrinho.png" /></a>
                <button class="btn btn-primary" id="criar-modal">Acionar Modal</button>

                </div>
            </div>
            </div>
                
            
        `


        }
    }

}



function mainn() { //pode ser qualquer nome
    fetch(`http://localhost:3000/maisvendidos`).then(balinha => balinha.json())
        .then(data => {
            let meuHtml = "";


            for (const product of data) {
                console.log(product)
                meuHtml += retornar(product);
            }
            let card = document.getElementById("conteudoo")

            console.log(meuHtml)
            card.innerHTML = meuHtml;
        })



}
mainn()