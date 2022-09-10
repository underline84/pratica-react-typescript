import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}
interface Props {
    children: React.ReactNode;
  }

export const UsuarioLogadoContext = 
createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<Props> = ({ children }) => {

    const handleLogout = useCallback(() => {
        console.log('Logout executado');
    },[])

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Evandro', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}