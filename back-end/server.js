const cors = require('cors')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
var sleep = require('system-sleep');
var usuario = [];
var produtos = [];





app.get('/produtos/:idVendedor', (req, res) => {


    const id = parseInt(req.params['idVendedor'], 10)
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

app.get('/ofertas', (req, res, next) => {


    next(res.json(produtos))
})

app.get('/maisvendidos', (req, res, next) => {


        next(res.json(produtos))
    })
    /*app.get('/legumesVerduras', (req, res, next) => {


      next(res.json(produtos))
    })

    app.get('/laticiniosCongelados', (req, res, next) => {


        next(res.json(produtos))
    })

    app.get('/biscoitos', (req, res, next) => {


        next(res.json(produtos))
    })*/
app.post('/produtos/:idVendedor', (req, res) => {
    const idVendedor = parseInt(req.params['idVendedor'], 10)
    var vendedor;

    for (var i = 0; i < usuario.length; i++) {
        console.log(typeof usuario[i].id)
        console.log(typeof idVendedor)
        console.log(`id do usuario ${usuario[i].id} paramito que o usuario procura ${idVendedor}`)
        if (usuario[i].id === idVendedor) {
            // achou!    
            console.log(idVendedor)
            vendedor = usuario[i];
        }

    }
    let id = produtos.length;

    const resultado = {

        "id": produtos.length,
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

    return res.json({ mensagem: "produto cadastrado com sucesso", resultado, id: id }).status(201);



})
app.put('/usuarios', (req, res) => {
    const idInformadoNoHtml = parseInt(req.body.id, 10) //parseInt faz com que o programa reconheça o numero do id 
    let indexProdutoAtualizado = -1;
    console.log(idInformadoNoHtml)
    console.log(usuario)

    for (var i = 0; i < usuario.length; i++) {
        if (usuario[i].id === idInformadoNoHtml) {
            indexProdutoAtualizado = i
        }
    }

    if (indexProdutoAtualizado >= 0) {
        const novasInformacoes = {
            "id": idInformadoNoHtml,
            "nomeVendedor": req.body.nomeVendedor,
            "endereco": req.body.endereco,
            "cidade": req.body.cidade,
            "telefone": req.body.telefone,
            "pagamento": req.body.pagamento
        };

        usuario[indexProdutoAtualizado] = novasInformacoes;
        return res.json({ mensagem: "usuario atualizado com sucesso" }).status(200);

    } else {
        return res.json({ mensagem: "id do usuario não encontrado" }).status(404);
    }

});

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

app.listen(3000)