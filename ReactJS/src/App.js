import React, { Component } from 'react';
import './style.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Sempre Siga em frente', 'Nunca olhe para trás', 'Não tenha medo de quem treinou mil vezes coisas diferentes, mas sim aquele que treinou mil vezes a mesma coisa', 'Nunca desista de seus sonhos', 'Prossiga mesmo que seu ânimo seja nulo', 'Se apegue aqueles que lhe fazem bem', 'Amizade não é baseada na quantidade de favores, mas sim na quantidade de desculpas', 'Seja tudo o que quer ser apenas tentando e falhando, porém nunca desistindo', 'Não dá pra ser para sempre a mesma pessoa, tudo evolui', 'Nunca se esqueça que aquilo que você não conseguiu, apenas não era pra ser', 'Seja feliz com o sucesso de seus amigos, sempre'];
    }

    quebraBiscoito() {
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = ' " ' + this.frases[numeroAleatorio] + ' " ';
        this.setState(state);
    }


    render() {
        return (
            <div className="container">
                <h1 className="titulo">Biscoito da Sorte</h1>
                <img src={require("./assets/biscoito.png").default} className="img" />
                <Botao nome="Abrir Biscoito" action={this.quebraBiscoito} />
                <h3 className="text">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.action}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;