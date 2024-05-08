import { useEffect } from "react";
import { useAuth } from "./AuthenticationProvider";
import api from "../api/base";
import { useLocation, useNavigate } from "react-router-dom";


export default function PrivatePage({ children }) {
    const { user, setUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        api.get('/auth/validate').then((resp) => {
            setUser(resp.data);
        }).catch(() => {});
    }, []);

    useEffect(() => {
        if(!user) {
            navigate('/acc/employee', {
                state: {
                    from: location.pathname,
                }
            });
        } 
        
        if (user && user.is_employee) {
            navigate(`/acc/employee/${user.pds}`, {
                state: {
                    from: location.pathname,
                }
            });
        }
    }, [user]);

    return children;
}