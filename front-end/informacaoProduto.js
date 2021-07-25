async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response)
    return response.json(); // parses JSON response into native JavaScript objects
}



function cadastrar() {
    const id = localStorage.getItem('id');
    let nome = document.getElementById("nome").value
    let preco = document.getElementById("preco").value
    let descricao = document.getElementById("descricao").value
    let categoria = document.getElementById("categoria").value
    let medidas = document.getElementById("medidas").value
    let quantidades = document.getElementById("quantidades").value


    postData(`http://localhost:3000/produtos`, {

            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "categoria": categoria,
            "medidas": medidas,
            "quantidades": quantidades,
            "vendedor": {
                "id": id
            }


        })
        .then(data => {
            console.log(data);


        })
        .catch((error) => {
            console.error(error);
        });





}