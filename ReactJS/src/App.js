import React from 'react';


const Equipe  = (props) => {
    return (
        <div>
            <Sobre username={props.nome} funcao={props.cargo} anos={props.idade}/>
            <Social lk={props.linkedin}/>
            <hr/>
        </div>

    );
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá eu sou o(a) {props.username}.</h2>
            <h3>Cargo: {props.funcao}</h3>
            <h3>Idade: {props.anos}</h3>
        </div>
    );
}


const Social = (props) => {
    return(
        <div>
            <a href={props.lk} target="_blank">Linkedin</a>
        </div>
    );
}


function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Gabriel" cargo="Contínuo" idade="20" linkedin="https://www.linkedin.com/in/gabriel-mota-033528206/"/>
            <Equipe nome="Arthur" cargo="Programador" idade="21" linkedin="https://www.linkedin.com/in/gabriel-mota-033528206/"/>
            <Equipe nome="Charles" cargo="Contínuo" idade="25" linkedin="https://www.linkedin.com/in/gabriel-mota-033528206/"/>
            
        </div>
    );
}

export default App;