function fazGet(url, nome) {
    let request = new XMLHttpRequest()
    request.open("GET", url, nome, false)
    request.send()
    return request.responseText
}

function retornar(produtos) {

    return `
    <div class="card-group mb-12 " id="conteudo">

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
        <a class="nav-link active" id="carrinhocompraa" aria-current="page"  title="Meus itens"> <input type="image" id="closef" src="img/carrinho.png" data-bs-toggle="modal" data-bs-target="#exampleModal0" /></a>
        
        </div>
    </div>
    <!-- Modal -->
                <div class="modal fade" id="exampleModal0" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Confirmação</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Escolha a quantidade desse item</p>
                                <div class="row g-0">
                                    <div class="col-sm-6 col-md-6"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0I0eEe-gPBvfHzgCBSf-X-8WqD91612ePw&usqp=CAU" class="card-img-top" alt="..."></div>
                                    <div class="col-6 col-md-4">
                                        <h4 id="cor">${produtos.nome} </h4>
                                    </div>
                                    <div class="col-6 col-md-2">
                                        <form id="frmNumber">
                                            <div>
                                                <label for="numero">Informe a quantidade:</label>
                                                <input type="number" id="numero" name="numero" min="0" max="200">
                                            </div>

                                        </form>
                                        <p id="resultado">
                                            <div>
                                                <label for="preco" class="col-form-label">R$${produtos.preco}</label>
                                            </div>


                                            <script>
                                                document.getElementById("frmNumber").onsubmit = function() {
                                                    let frmNr = document.getElementById('frmNumber').elements;
                                                    document.getElementById("resultado").innerHTML = "Você digitou: " + frmNr['numero'].value;
                                                    return false;
                                                };
                                            </script>



                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn " id="botaooo" data-bs-dismiss="modal">Voltar</button>
                                <button type="button" class="btn " id="botaoo">Adicionar ao carrinho</button>
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
            card.innerHTML = meuHtml;
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