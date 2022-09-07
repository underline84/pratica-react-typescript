import { Link } from "react-router-dom";

export const Dashbord = () => {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
        </div>
    );
}