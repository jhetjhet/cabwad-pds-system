import { useEffect } from "react";
import { useAuth } from "./AuthenticationProvider";
import api from "../api/base";
import { useNavigate } from "react-router-dom";


export default function PrivatePage({ children }) {
    const { user, setUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/auth/validate').then((resp) => {
            setUser(resp.data);
        }).catch(() => {});
    }, []);

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [user]);

    return children;
}