import React, { Component } from 'react';
import './App.css';
import Painel from './Painel';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            cor: '',
            lista: [],
            botaoDesabilitado: true,
        }
    }

    componentDidMount() {
        this.buscarListaDeCores();
    }

    async buscarListaDeCores() {
        try {
            const response = await fetch('http://localhost:5000/cor')
            this.atualizarListaDeCoresAposFetch(response);
        } catch (e) {
            console.log(e);
        }
    }

    async adicionarCor(cor) {
        try {
            const response = await fetch('http://localhost:5000/cor', {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(cor),
            })
            this.atualizarListaDeCoresAposFetch(response);
        } catch (e) {
            console.log(e);
        }
    }

    async removerCor(nome) {
        try {
            const response = await fetch('http://localhost:5000/cor/' + nome, {
                method: 'DELETE'
            })
            this.atualizarListaDeCoresAposFetch(response);
        } catch (e) {
            console.log(e);
        }
    }

    async atualizarListaDeCoresAposFetch(response) {
        var contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const listaDeCoresJson = await response.json();
            this.setState({
                lista: listaDeCoresJson
            }, () => this.validar());
        }
    }


    existeNome(nome) {
        for (let i = 0; i < this.state.lista.length; i++) {
            if (this.state.lista[i].nome === nome) {
                return true;
            }
        }
        return false;
    }

    handleTextChanged(e) {
        const n = e.target.name;
        const v = e.target.value;
        this.setState({
            [n]: v,
        }, () => this.validar());
    }

    validar() {
        const b = this.state.nome.length === 0 || this.existeNome(this.state.nome);
        this.setState({
            botaoDesabilitado: b,
        });
    }

    handleButtonClick() {
        this.adicionarCor({ nome: this.state.nome, valor: this.state.cor });
    }

    removerElemento(nome) {
        this.removerCor(nome);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Lista de cores</h1>
                    <p>Digite o texto:</p>
                    <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.handleTextChanged(e)} />
                    <input type="text" name="cor" value={this.state.cor} onChange={(e) => this.handleTextChanged(e)} />
                    <button onClick={() => this.handleButtonClick()} disabled={this.state.botaoDesabilitado}>Adicionar</button>
                    {this.state.botaoDesabilitado &&
                        (<p style={{ color: 'red' }}>Erro!</p>)
                    }
                    <Painel lista={this.state.lista} removerElemento={(nome) => this.removerElemento(nome)} />
                </header>
            </div>
        );
    }
}

export default App;