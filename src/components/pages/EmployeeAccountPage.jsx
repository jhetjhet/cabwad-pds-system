import { useEffect } from "react";
import PDSFormPage from "./pds";
import { useAuth } from "../AuthenticationProvider";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/base";



export default function EmployeeAccountPage() {
    const { user } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const prevUrl = location?.state?.from || '/';

    useEffect(() => {
        if(!user) {
            api.get('/auth/validate').then((resp) => {
                navigate(prevUrl);
            }).catch((error) => {
            });
        }
    }, []);

    return (
        <div className="p-10 bg-blue-500">
            <div>
                <img
                    className="mx-auto h-32 w-auto"
                    src="https://cabuyaowaterdistrict.gov.ph/wp-content/uploads/2022/08/Cabuyao-Water-District-300-%C3%97-100-px.png"
                    alt="Your Company"
                />
            </div>
            <PDSFormPage />
        </div>
    );
}

