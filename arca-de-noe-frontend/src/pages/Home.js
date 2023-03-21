import { Button } from "../components/Button";
import './Home.css';

function Home() {
    return (
        <div class="grid-container">
            <div class="header">
//                <img id="main-icon" src="logo.png" title="Arca de Noé"/>
                
                <a href="login"><button class="menu">Login</button></a>
                <a href="listaPets"><button class="menu">Quero Adotar um Pet</button></a> 
            </div>

            <div class="top">
                <h2>Sobre a Arca de Noé</h2>
                <p>Somos pessoas que amam pets e queremos que todos tenham alguém para cuidá-los.</p>
                <p>Nosso trabalho é conectar as pessoas que desejam adotar um pet com diversos parceiros que possuem pets para adoção.</p>
            </div>

            <div class="titleColumns">
                <h2>Veja como é simples</h2>
            </div>
            
            <div class="left central">
                <img class="icon" src="formulario.png" /><br/>
                <bdo> Faça cadastro no nosso site e preencha as informações de perfil.</bdo>
            </div>
            <div class="middle central">
                <img class="icon" src="lista.png" /><br/>
                <bdo>Confira nossa lista de pets disponíveis e escolha aquele que mais combina com você.</bdo>
            </div>  
            <div class="right central">
                <img class="icon" src="aprovado2.png"  /><br/>
                <bdo>Assim que seu interesse for aprovado entramos em contato para combinar dia/hora/local para você buscar seu pet!</bdo>
            </div>

            <div class="footer">
                <h4>Disciplina: </h4>
                <p>Desenvolvimento de Software para Web 2</p>

                <h4>Alunos: </h4>
                <bdo>Augusto Luchesi Matos</bdo><br/><bdo>Enio da Costa Martinelli</bdo><br/><bdo>Kevin</bdo>
            </div>
        </div>
    );
}

export default Home;