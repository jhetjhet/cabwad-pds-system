import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE, SUPER_ADMIN } from "./pages/pds/constants/constant";

const AuthContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, _setUser] = useState(null);

    const setUser = (_user) => {

        if(!_user) {
            _setUser(null);
        }

        if(!_user?.roles) {
            return;
        }

        _user.is_super_admin = false;
        _user.is_employee = false;

        for (const role of _user.roles) {

            if(role.code === SUPER_ADMIN) {
                _user.is_super_admin = true;
            }

            if(role.code === EMPLOYEE) {
                _user.is_employee = true;
            }
        }


        _setUser(_user);
    }

    return (
        <AuthContext.Provider value={{user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);