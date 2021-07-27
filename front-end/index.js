/*let page = 1

const getPosts = async() => {
    const response = await fetch('http://localhost:3000/produto?nome=daiane')
    return response.json()
}

const addPostsIntoDOM = async() => {
    const posts = await getPosts()
    const postsTemplate = posts.map(({ id, title, body }) => `
        <div class="post">
        <div class="number">${id}</dv>
        <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p class="post-body">${body}</p>
        </div>
        </div>

        `)
    console.log(posts)
    console.log(postsTemplate)
}

addPostsIntoDOM()*/

function fazGet(url, nome) {
    let request = new XMLHttpRequest()
    request.open("GET", url, nome, false)
    request.send()
    return request.responseText
}

function retornar(produtos) { //get que passa o id do vendedor
    const meuHtml = `

    <div class="card ">
    <img src="img/alface.png " class="card-img-top " alt="... ">
    <div class="card-body ">
        <h5 class="card-title " id="name">${produtos.nome}</h5>
            <p class="card-text " id="preco">R$ ${produtos.preco}</p>
            <p class="card-text " id="pagamento">${produtos.pagamento}</p>
            <p class="card-text " id="nomeVendedor">${produtos.nomeVendedor}</p>
            <p class="card-text " id="endereco">${produtos.endereco}</p>
            <p class="card-text " id="cidade">${produtos.cidade}</p>
            <a class="nav-link active" id="carrinhocompraa" aria-current="page" href="carrinhoCompra.html" title="Meus itens"> <input type="image" id="closeff" src="img/carrinho.png" /></a>

    </div>

</div>

   
    
`
    console.log(produtos)
    return meuHtml;



}

function main() { //pode ser qualquer nome
    fetch(`http://localhost:3000/ofertas`).then(balinha => balinha.json())
        .then(data => {
            let meuHtml = "";

            for (const product of data.mensage) {
                console.log(product)
                meuHtml += retornar(product);
            }
            let card = document.getElementById("conteudo")
            ` <div class="card-group mb-12 " id="conteudo">${meuHtml}</div>`
            card.innerHTML = meuHtml;


        })



}
main()

/*async function getContent() {
    try {
        const response = await fetch('http://localhost:3000/produtos')
        const data = await response.json()
        show(data)
    } catch (error) {
        console.log(error)
    }
}
getContent()

function show(nome) {
    let output = ''

    for (const usuario of nome) {
        console.log(usuario)
        output += retornar(usuario);
        output += `
   <div class="container fluid">
   <div class="col" id="conteudo">
      <div class="container">
           <div class="card mb-3" style="max-width: 80%;">

               <div class="row g-0">
                   <div class="col-md-4">
                       <img src="img/beterraba.png" class="img-fluid rounded-start" id="mgf" alt="...">
                   </div>
                   <div class="col-md-8">
                       <div class="row g-0">
                           <div class="col-sm-6 col-md-7">
                               <div class="card-body" id="card">
                                   <h5 class="card-title">Beterraba UNDS</h5>
                                   <p class="card-text">
                                       <p id="nome"></p>>vendedor:${usuario.nome}   </p>
                                   <p>Endereço: Fazenda Estancia São Geraldo</p>
                                   <p>Cidade: Serra da Sauldade-MG</p>
                                   <p>Obs: Aproximadamente 800gm</p>

                                   </p>

                               </div>
                           </div>
                           <div class="col-6 col-md-2" id="coluna">
                               <p> Remover:</p>
                               <input type="image" id="buttondf" src="img/remover.png" />

                           </div>

                           <div class="col-6 col-md-3">
                               <label for="inputPassword6" class="col-form-label" id="preco">R$ ${usuario.preco}  </label>
                               <p id="p"> Quantidade:</p>
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
       </div>  
   </div>
</div>   

`
    }
    document.querySelector('main').innerHTML = output
}*/