// import { useNavigate  } from "react-router-dom";

import { useCallback, useState, useMemo, useRef } from "react"
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const {nomeDoUsuario} = useUsuarioLogado();

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email, password);

    }, [email, password]);

    // const navigate = useNavigate();
    // const handleClick = () => {
    // navigate('/pagina-inicial');
    // }

    return (
        <div>
            {/* <button onClick={handleClick}>Pagina Inícial</button> */}
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <p>{nomeDoUsuario}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    ref={inputPasswordRef}
                    
                />

                {/* <button type="button" onClick={handleEntrar}>Entrar</button> */}

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>
                    Cadastrar
                </ButtonLogin>

            </form>
        </div>

    );
}