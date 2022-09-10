import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";


export const Dashbord = () => {

    const {nomeDoUsuario, logout} = useUsuarioLogado();

    return (
        <div>
            <p>Dashboard</p>
            <p>{nomeDoUsuario}</p>
            <Link to="/entrar">Login</Link>
            <button onClick={logout}>logout</button>
        </div>
    );
}