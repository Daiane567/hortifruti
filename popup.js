//function abrir(URL) {
//   window.open(URL, 'janela', 'width=795, height=590, top=100, left=699, scrollbars = no, status = no, toolbar = no, location = no, menubar = no, resizable = no, fullscreen = no ')
//}

/*function abrir(usuario) {
    const meuHtml = `
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
    console.log(usuario)
    return meuHtml;



}*/

//function abrir2() {
//  URL = "http://uol.com.br";
//window.open(URL, 'janela', 'width=660, height=510, top=100, left=699, scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no')
//}
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})



closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

}