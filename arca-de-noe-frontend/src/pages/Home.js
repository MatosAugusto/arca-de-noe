import { Button } from "../components/Button";
import {GoChecklist} from "react-icons/go";
import {GiSittingDog} from "react-icons/gi";
import {FcApproval} from "react-icons/fc";
import {MdPets} from "react-icons/md";
import { IconContext } from "react-icons";
import "./Home.css";

function Home() {
    return (
        <div class="grid-container">
            <div class="header">
                <IconContext.Provider value={{className: "main-icon" }}>
                    <div>
                        <MdPets />
                    </div>
                </IconContext.Provider>
                <Button label="Login" link="/login" color='blue' className="menu"/>
                <Button label="Quero Adotar um Pet" link="/listaPets" color='blue' className="menu" />
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
                <IconContext.Provider value={{className: "icon" }}>
                    <div>
                        <GoChecklist />
                    </div>
                </IconContext.Provider>
                <bdo> Faça cadastro no nosso site e preencha as informações de perfil.</bdo>
            </div>
            <div class="middle central">
                <IconContext.Provider value={{className: "icon" }}>
                    <div>
                        <GiSittingDog />
                    </div>
                </IconContext.Provider>
                <bdo>Confira nossa lista de pets disponíveis e escolha aquele que mais combina com você.</bdo>
            </div>  
            <div class="right central">
                <IconContext.Provider value={{style:{color: "black"}, className: "icon" }}>
                    <div>
                        <FcApproval />
                    </div>
                </IconContext.Provider>
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