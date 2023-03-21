import express from 'express';
const app = express();

app.use(express.static('public'));
app.use(express.json());

const listaDeCores = {};

function getListaDeCores() {
    return Object.keys(listaDeCores).map((key) => { 
        return { nome: key, valor: listaDeCores[key]};
    })
}

app.get('/cor', (req,res) => {
    return res.json(getListaDeCores());
});

app.put('/cor', (req, res) => {
    const data = req.body;
    listaDeCores[data.nome] = data.valor;
    return res.json(getListaDeCores());
});

app.delete('/cor/:nome', (req, res) => {
    const nome = req.params.nome;
    if(!listaDeCores[nome]) {
        res.status(404).send('Cor '+nome+' não existe');
    } else {
        delete listaDeCores[nome];
        return res.json(getListaDeCores());
    }
});

app.listen(5000, () => {
    console.log('Escutando na porta 5000');
});