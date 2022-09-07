import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom"
import { Dashbord, Login } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashbord />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
} 