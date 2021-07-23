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
var id;

function login() {
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value

    postData(` http://localhost:3000/usuarios/login`, {


            "senha": senha,
            "email": email
        })
        .then(data => {
            localStorage.setItem("id", data.id);
            console.log(window.localStorage.getItem("id", data.id));

            window.location.href = "file:///C:/Users/dr465/projetosPUC/Hortifruti/informacoesProduto.html?id = " + data.id
            console.log(data); // JSON data parsed by `data.json()` call

        })
        .catch((error) => {

            console.error(error);
        });



}

function cadastro() {
    let url = "http://localhost:3000/usuarios"
    let nome_cad = document.getElementById("nome_cad").value
    let email_cad = document.getElementById("email_cad").value
    let senha_cad = document.getElementById("senha_cad").value


    postData('http://localhost:3000/usuarios', {
        "nome": nome_cad,
        "email": email_cad,
        "senha": senha_cad

    })


    .then(data => {
            window.location.href = "file:///C:/Users/dr465/projetosPUC/Hortifruti/login.html#paralogin"

            console.log(data); // JSON data parsed by `data.json()` call

        })
        .catch((error) => {
            console.error(error);
        });



}