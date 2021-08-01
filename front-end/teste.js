const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");
const mystates = document.querySelector("#my-states");
let statesAll = [];
let states = [];

(async() => {
    const res = await fetch('http://localhost:3000/ofertas');
    states = await res.json();
    console.log(states);
})()

const searchStates = seachText => {
    let matches = states.filter(state => {
        const regex = new RegExp(`^${seachText}`, 'gi');
        return state.nome.match(regex) || state.preco.match(regex);
    });
    if (seachText.length == 0)
        matches = [];

    outputHTML(matches);
}

const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(
            produtos => `
            <div class="card card-body mb-1" id="cardm">
            <div class="d-flex justify-content-between">
                <h4>${produtos.nome} ${produtos.id}
                    <span class="text-primary"></span>
                </h4>
                <div class="p-2">
                    <button onclick="addCardList(${JSON.stringify(produtos).replace(/"/g,"'")})" class="btn-sm btn-primary">+</button>
                </div>
            </div>
            <div>
                <small>lat: /long: </small>
            </div>
         </div>
            `
        ).join('');
        matchList.innerHTML = html;
    } else {
        matchList.innerHTML = '';
    }
}

const addCardList = card => {
    statesAll
        .filter(state => state.nome.match(card.nome)) //essa linha faz o filtro para não aparecer um produto igual
        .length == 0 ? statesAll.push(card) : statesAll.push();
    print(); //com isso eu não consigo adivionar dois iguais.
}

const removeCardList = index => {
    statesAll.splice(index, 1);
    print()
}

const print = () => {
    mystates.innerHTML = '';
    statesAll.forEach((card) => {
        mystates.innerHTML += `
    <div class="card card-body mb-1" id="cardm">
            <div class="d-flex justify-content-between">
                <h4>${card.nome} ${card.id}
                    <span class="text-primary"></span>
                </h4>
                <div class="p-2">
                    <button onclick="removeCardList(${JSON.stringify(card).replace(/"/g,"'")})" class="btn-sm btn-danger">-</button>
                </div>
            </div>
            <div>
                <small>lat: /long: </small>
            </div>
         </div>
    `;
    })


}

search.addEventListener('input', () => searchStates(search.value))
window.addEventListener('keyup', event => {
    if (event.keyCode === 27) {
        search.value = '';
        search.focus();
        matchList.innerHTML = '';
    }
})