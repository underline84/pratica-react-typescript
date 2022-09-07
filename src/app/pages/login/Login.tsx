// import { useNavigate  } from "react-router-dom";

import { useState } from "react"


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email, password);
        
    }

    // const navigate = useNavigate();
    // const handleClick = () => {
        // navigate('/pagina-inicial');
    // }

    return (
        <div>            
            {/* <button onClick={handleClick}>Pagina Inícial</button> */}
            <form>
                <label>
                    <span>Email:</span>
                    <input type="text" 
                    value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" 
                    value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>

    );
}