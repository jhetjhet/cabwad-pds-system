import PersonalInfoForm from "./PersonalInfoForm"
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const FormContainer = ({ title, children }) => {

    return (
        <div>
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
    )
}

export default function PDSFormPage() {


    return (
        <div>
            <h1 className="uppercase text-center font-extrabold text-3xl">personal data sheet</h1>
            <div>
                <PersonalInfoForm />
            </div>
        </div>
    )
}