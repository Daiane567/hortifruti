async function putData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response)
    return response.json(); // parses JSON response into native JavaScript objects
}
var id;

function vendedor() {

    const id = localStorage.getItem('id');
    let nomeVendedor = document.getElementById("nomeVendedor").value
    let endereco = document.getElementById("endereco").value
    let cidade = document.getElementById("cidade").value
    let telefone = document.getElementById("telefone").value
    let pagamento = document.getElementById("pagamento").value



    putData(`http://localhost:3000/usuarios`, {

            "id": id,
            "nomeVendedor": nomeVendedor,
            "endereco": endereco,
            "cidade": cidade,
            "telefone": telefone,
            "pagamento": pagamento
        })
        .then(data => {
            window.location.href = "./informacoesProduto.html?id = " + data.id

            console.log(data); // JSON data parsed by `data.json()` call

        })
        .catch((error) => {
            console.error(error);
        });





}