import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { SUPER_ADMIN } from "./pages/pds/constants/constant";

const AuthContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, _setUser] = useState(null);

    const setUser = (_user) => {
        let isSuperAdmin = false;

        if(!_user?.roles) {
            return;
        }

        for (const role of _user.roles) {
            if(role.code === SUPER_ADMIN) {
                isSuperAdmin = true;
                break;
            }
        }

        _user.is_super_admin = isSuperAdmin;

        _setUser(_user);
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);