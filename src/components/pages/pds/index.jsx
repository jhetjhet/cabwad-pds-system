import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

export const FormContainer = ({ title, children }) => {
    return (
        <div className="mb-4">
            {title && (
                <div className="flex items-center mb-1">
                    <FormatListBulletedOutlinedIcon className="mr-2" />
                    <p className="uppercase">{title}</p>
                </div>
            )}
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                {children}
            </div>
        </div>
    );
};

export const CInput = ({
    label,
    pattern = "null",
    type = "text",
    name,
    className,
    value,
    onChange,
    isRequired = false,
    hasError = false,
    errorMessage,
    required = false,
}) => {
    const [isTouched, setIsTouched] = useState(false);

    return (
        <div className={`relative z-0 w-full mb-5 group ${className}`}>
            <input
                type={type}
                name={name}
                id={name}
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
                value={value}
                onChange={onChange}
                required={isRequired}
                onTouchStart={() => setIsTouched(true)}
            />
            {required ? (
                <label
                    htmlFor={name}
                    className="peer-focus:font-medium absolute text-sm text-red-500 dark:text-red-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}*
                </label>
            ) : (
                <label
                    htmlFor={name}
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
            )}
            {(hasError && errorMessage) && (
                <span className="text-red-400">{errorMessage}</span>
            )}
        </div>
    );
};

export const CRadio = ({
    name,
    className,
    onChange,
    checked,
    value,
    label,
}) => {
    return (
        <div className={`relative z-0 w-full group ${className}`}>
            <input
                type="radio"
                id={name}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={name} className="ml-1">
                {label || name}
            </label>
        </div>
    );
};

export default function PDSFormPage() {
    return (
        <div>
            <h1 className="uppercase text-center font-extrabold text-3xl">
                personal data sheet
            </h1>
            <div>
                <PersonalInfoForm />
            </div>
        </div>
    );
}
