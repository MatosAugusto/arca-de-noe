import { useState } from 'react';
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import {MdPets} from "react-icons/md";
import { IconContext } from "react-icons";
import "./Login.css";


function Login() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [password, setPassword] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [searchConcluded, setSearchConcluded] = useState(false);
    const [message, setMessage] = useState('');
    const [existingGambler, setExistingGambler] = useState(null);
    const [existingBet, setExistingBet] = useState(null);

    function resetForm() {
        setUsername('');
        setPassword('');
    }

    async function retrieveUserByEmail() {
        if (email.trim().length === 0) {
            setInvalidEmail(true);
            setSearchConcluded(true);
            return;
        } else {
            setInvalidEmail(false);
            setSearchConcluded(true);
            try {
                const getUserResponse = await fetch('http://localhost:5000/user?email=' + email);
                if (getUserResponse.status === 200) {
                    /* Encaminhar para págima home */
                    window.location.href = "http://localhost:3000/";
                }
            }
            catch (err) {
                console.log('Error: ' + err);
            }
        }
    }

    return (
        <div class="login">
            <div class="header">
                <IconContext.Provider value={{className: "main-icon" }}>
                    <div>
                        <MdPets />
                    </div>
                </IconContext.Provider>
            </div>
            <div class="container">
                
                <FormInput id='username' label='Nome de Usuário' value={email} type='text' size='full' onChange={e => setEmail(e.target.value )} />
                <FormInput id='password' label='Senha' value={password} type='password' size='full' onChange={e => setPassword(e.target.value )} />
                

                <div className="m-4"></div>

                <div className="flex flex-col items-center">
                    <Button label="Login" action={retrieveUserByEmail} color='blue' className="menu" />
                    <Button label="Cadastre-se" link="/cadastro" color='blue' className="menu" />
                </div>

            </div>
        </div>
    );
}

export default Login;