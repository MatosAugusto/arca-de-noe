import React from 'react';

class Painel extends React.Component {

    render() {
        const listaDeCores = this.props.lista.map(e => <li key={e.nome} style={{color: e.valor}}>{e.nome} 
            <button onClick={() => this.props.removerElemento(e.nome)}>Remover</button>
        </li>)

        return (
            <div>
                <h2>Painel</h2>
                <ul style={{textAlign: 'left'}}>
                    {listaDeCores}
                </ul>
            </div>

        );
    }
}

export default Painel;