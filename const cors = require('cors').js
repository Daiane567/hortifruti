const cors = require('cors')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
var sleep = require('system-sleep');
var usuario = [];
var produtos = [];





app.get('/produtos', (req, res) => {


    const id = parseInt(req.query['id'], 10)
    var cestoRoupa = []
    for (var i = 0; i < produtos.length; i++) {
        console.log(produtos[i])
        console.log(`id do vendedor ${produtos[i].vendedor.id} paramito que o usuario procura ${id}`)
        if (produtos[i].vendedor.id === id) {
            // achou!    
            console.log("achou")
            cestoRoupa.push(produtos[i]);
        }

    }
    return res.json({ mensage: cestoRoupa })
})



app.post('/produtos', (req, res) => {
    const balinha = parseInt(req.body.vendedor.id, 10)
    var vendedor;

    for (var i = 0; i < usuario.length; i++) {
        console.log(usuario[i])
        console.log(`id do usuario ${usuario[i].id} paramito que o usuario procura ${balinha}`)
        if (usuario[i].id === balinha) {
            // achou!    
            console.log(balinha)
            vendedor = usuario[i];
        }

    }
    let id = produtos.length;

    const resultado = {

        "id": req.body.id,
        "nome": req.body.nome,
        "preco": req.body.preco,
        "descricao": req.body.descricao,
        "categoria": req.body.categoria,
        "medidas": req.body.medidas,
        "quantidades": req.body.quantidades,
        "vendedor": {
            "id": vendedor.id,
            "nomeVendedor": vendedor.nomeVendedor,
            "cidade": vendedor.cidade,
            "endereco": vendedor.endereco,
            "telefone": vendedor.telefone,
            "pagamento": vendedor.pagamento

        }
    }

    produtos.push(resultado);

    res.json({ mensagem: "produto cadastrado com sucesso", resultado, id: id }).status(201);
    console.log(resultado) //


})


app.post('/usuarioss', (req, res) => {
    /*const balinha = parseInt(req.body.vendedor.id, 10)
    var vendedor;

    for (var i = 0; i < usuario.length; i++) {
        console.log(usuario[i])
        console.log(`id do usuario ${usuario[i].id} paramito que o usuario procura ${balinha}`)
        if (usuario[i].id === balinha) {
            // achou!    
            console.log(balinha)
            vendedor = usuario[i];
        }

    }*/
    let id = usuario.length;

    const resultado = {




        "id": req.body.id,
        "nomeVendedor": req.body.nomeVendedor,
        "cidade": req.body.cidade,
        "endereco": req.body.endereco,
        "telefone": req.body.telefone,
        "pagamento": req.body.pagamento


    };

    usuario.push(resultado);

    res.json({ mensagem: "produto cadastrado com sucesso", resultado, id: id }).status(201);
    console.log(usuario) //


})






app.post('/usuarios/login', (req, res) => {

    for (var i = 0; i < usuario.length; i++) {
        console.log(` usuario ${usuario[i].email} paramito que o usuario procura ${req.body.email}`)
        console.log(` senha ${usuario[i].senha} paramito que o usuario procura ${req.body.senha}`)

        if (usuario[i].email === req.body.email && usuario[i].senha === req.body.senha) {
            const resultados = {
                "id": usuario[i].id,
                "email": usuario[i].email,
                "nome": usuario[i].nome


            }
            return res.json(resultados).status(201);
        }
    }

    return res.json({ mensagem: "login errado" }).status(401);

})

app.post('/usuarios', (req, res) => {

    let id = usuario.length;

    const resultad = {
        "id": id,
        "nome": req.body.nome,
        "email": req.body.email,
        "senha": req.body.senha


    }

    usuario.push(resultad);
    console.log(usuario)

    res.json({ mensagem: "usuario cadastrado com sucesso", resultad, id: id, }).status(201);
})

/*app.get('/usuarios', (req, res) => {


    const id = parseInt(req.query['id'], 10)
    var cestoRoupa = []
    for (var i = 0; i < produtos.length; i++) {
        console.log(produtos[i])
        console.log(`id do vendedor ${produtos[i].vendedor.id} paramito que o usuario procura ${id}`)
        if (produtos[i].vendedor.id === id) {
            // achou!    
            console.log("achou")
            cestoRoupa.push(produtos[i]);
        }

    }
    return res.json({ mensage: cestoRoupa })
})*/







app.listen(3000)