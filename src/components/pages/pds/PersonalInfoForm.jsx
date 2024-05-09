import React, { useEffect, useRef, useState } from "react";
import { CInput, CRadio, FormContainer } from ".";
import InputFieldCivil from "./InputFieldCivil";
import InputFieldLAD from "./InputFieldLAD";
import InputFieldOI from "./InputFieldOI";
import InputFieldVW from "./InputFieldVW";
import InputFieldWE from "./InputFieldWE";
import InputFields from "./InputFields";
import { defaultVal } from "./constants/constant";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createPDS, getPDS, updatePDS } from "../../../api/employee.crud";
import { InfoModal, createToast } from "../../forms";
import { useAuth } from "../../AuthenticationProvider";

export default function PersonalInfoForm() {
    const [formData, setFormData] = useState({ ...defaultVal });
    const [genUsername, setGenUsername] = useState();
    const [showUserInfo, setShowUserInfo] = useState(false);

    const { pdsId, userId } = useParams();

    const { user, setUser } = useAuth();

    const topDivRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!pdsId) {
            return;
        }

        getPDS(pdsId).then((resp) => {
            setFormData({
                ...defaultVal,
                ...resp.data,
            });
        }).catch(() => { });
    }, []);

    const handlePersonalInfoChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                [name]: value,
            },
        }));
    };

    const handleNameChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                name: {
                    ...prevState.personal_information.name,
                    [name]: value,
                },
            },
        }));
    };

    const handleSexChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                gender: value,
            },
        }));
    };

    const handleCivilStatus = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                civil_status: value,
            },
        }));
    };

    const handleCitizenshipChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                citizenship: value,
            },
        }));
    };

    const handleq34a = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q34: {
                    ...prevState.questions.q34,
                    a: value == "yes",
                },
            },
        }));
    };

    const handleq34b = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q34: {
                    ...prevState.questions.q34,
                    b: value == "yes",
                },
            },
        }));
    };

    const handleq34det = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q34: {
                    ...prevState.questions.q34,
                    details: value,
                },
            },
        }));
    };

    const handleq35a = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q35: {
                    ...prevState.questions.q35,
                    a: {
                        ...prevState.questions.q35.a,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq35b = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q35: {
                    ...prevState.questions.q35,
                    b: {
                        ...prevState.questions.q35.b,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq35adet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q35: {
                    ...prevState.questions.q35,
                    a: {
                        ...prevState.questions.q35.a,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleq35bdetdf = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q35: {
                    ...prevState.questions.q35,
                    b: {
                        ...prevState.questions.q35.b,
                        details: {
                            ...prevState.questions.q35.b.details,
                            date_filed: value,
                        },
                    },
                },
            },
        }));
    };

    const handleq35bdetst = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q35: {
                    ...prevState.questions.q35,
                    b: {
                        ...prevState.questions.q35.b,
                        details: {
                            ...prevState.questions.q35.b.details,
                            case: value,
                        },
                    },
                },
            },
        }));
    };

    const handleq36 = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q36: {
                    ...prevState.questions.q36,
                    value: value == "yes",
                },
            },
        }));
    };

    const handleq36dets = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q36: {
                    ...prevState.questions.q36,
                    details: value,
                },
            },
        }));
    };

    const handleq37 = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q37: {
                    ...prevState.questions.q37,
                    value: value == "yes",
                },
            },
        }));
    };

    const handleq37dets = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q37: {
                    ...prevState.questions.q37,
                    details: value,
                },
            },
        }));
    };

    const handleq38a = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q38: {
                    ...prevState.questions.q38,
                    a: {
                        ...prevState.questions.q38.a,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq38b = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q38: {
                    ...prevState.questions.q38,
                    b: {
                        ...prevState.questions.q38.b,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq38adet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q38: {
                    ...prevState.questions.q38,
                    a: {
                        ...prevState.questions.q38.a,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleq38bdet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q38: {
                    ...prevState.questions.q38,
                    b: {
                        ...prevState.questions.q38.b,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleq39 = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q39: {
                    ...prevState.questions.q39,
                    value: value == "yes",
                },
            },
        }));
    };

    const handleq39dets = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q39: {
                    ...prevState.questions.q39,
                    details: value,
                },
            },
        }));
    };

    const handleq40a = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    a: {
                        ...prevState.questions.q40.a,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq40b = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    b: {
                        ...prevState.questions.q40.b,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq40c = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    c: {
                        ...prevState.questions.q40.c,
                        value: value == "yes",
                    },
                },
            },
        }));
    };

    const handleq40adet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    a: {
                        ...prevState.questions.q40.a,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleq40bdet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    b: {
                        ...prevState.questions.q40.b,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleq40cdet = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            questions: {
                ...prevState.questions,
                q40: {
                    ...prevState.questions.q40,
                    c: {
                        ...prevState.questions.q40.c,
                        details: value,
                    },
                },
            },
        }));
    };

    const handleResidentialAddressChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                residential_address: {
                    ...prevState.personal_information.residential_address,
                    [name]: value,
                },
            },
        }));
    };

    const handlePermanentAddressChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            personal_information: {
                ...prevState.personal_information,
                permanent_address: {
                    ...prevState.personal_information.permanent_address,
                    [name]: value,
                },
            },
        }));
    };

    const handleFamilyBackgroundChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            family_background: {
                ...prevState.family_background,
                [name]: value,
            },
        }));
    };

    const handleSpouseName = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            family_background: {
                ...prevState.family_background,
                spouse_name: {
                    ...prevState.family_background.spouse_name,
                    [name]: value,
                },
            },
        }));
    };

    const handleFatherName = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            family_background: {
                ...prevState.family_background,
                fathers_name: {
                    ...prevState.family_background.fathers_name,
                    [name]: value,
                },
            },
        }));
    };

    const handleMotherName = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            family_background: {
                ...prevState.family_background,
                mothers_name: {
                    ...prevState.family_background.mothers_name,
                    [name]: value,
                },
            },
        }));
    };

    // Additional handleChange functions for other nested levels as needed
    const generalHandleChange = (e) => {
        const { name, value } = e.target;

        // Split the name into nested keys
        const keys = name.split(".");

        // Initialize a newFormData object
        let newFormData = { ...formData };

        // Get the nested object to update
        let nestedObj = newFormData;

        // Traverse the nested object to reach the deepest level
        for (let i = 0; i < keys.length - 1; i++) {
            if (!nestedObj[keys[i]]) {
                nestedObj[keys[i]] = {};
            }
            nestedObj = nestedObj[keys[i]];
        }

        // Update the value at the deepest level
        nestedObj[keys[keys.length - 1]] = value;

        // Update the state with the modified formData
        setFormData(newFormData);
    };

    const onPdsSubmit = (e) => {
        e.preventDefault();

        if (
            !formData?.personal_information?.name?.firstname ||
            !formData?.personal_information?.name?.middlename ||
            !formData?.personal_information?.name?.lastname ||
            !formData?.personal_information?.birth_date ||
            !formData?.personal_information?.gender ||   
            !formData?.personal_information?.agency_employee_no  
        ) {
            createToast('error', "Fill out all required fields.");
            return;
        }

        formData.user_id = userId;

        if (pdsId) {
            updatePDS(pdsId, formData).then((resp) => {
                createToast('success', "Employee details updated successfully.");
                setFormData({
                    ...defaultVal,
                    ...resp.data,
                });
            }).catch((error) => {
                setFormData({ ...defaultVal });
                if (error?.response?.data) {
                    createToast('error', error?.response?.data);
                }
                else {
                    createToast('error', "Something went wrong.");
                }
            }).finally(() => {
                topDivRef.current.scrollIntoView();
            });
        }
        else {
            createPDS(formData).then((resp) => {
                const { pds, username, has_account } = resp.data;

                setGenUsername(username);

                createToast('success', "Employee details successfully added.");

                if (!has_account) {
                    setShowUserInfo(true);
                }
            }).catch((error) => {
                if (error?.response?.data) {
                    createToast('error', error?.response?.data);
                }
                else {
                    console.log(error)
                    createToast('error', "Something went wrong.");
                }
            }).finally(() => {
                setFormData({ ...defaultVal });
                topDivRef.current.scrollIntoView();
            });
        }
    }

    const onSetShowUserInfo = (value) => {

        setShowUserInfo(value);

        navigate('/login');
    }

    const logout = () => {
        setUser(null);
        navigate('/login', {
            state: {
                is_logout: true,
            }
        });
    }

    const regex = /^\/acc\/employee(?:\/[a-zA-Z0-9_-]+)?$/;

    return (
        <>
            {regex.test(location.pathname) && (
                <div className="flex w-100 p-10">
                    {user && (
                        <h1 className="text-white font-extrabold text-2xl">Welcome {formData.personal_information.name.firstname}</h1>
                    )}
                    {user ? (
                        <button className="ml-auto underline text-red-400 font-semibold italic"
                            onClick={() => logout()}
                        >
                            Sign out
                        </button>
                    ) : (
                        <button className="ml-auto underline text-gray-900 font-semibold italic"
                            onClick={() => navigate('/login', { replace: true })}
                        >
                            Login
                        </button>
                    )}
                </div>
            )}
            <div ref={topDivRef} />
            <InfoModal
                show={showUserInfo}
                setShow={onSetShowUserInfo}
                title="Use the ff info to edit your details!"
                message={`Your username is "${genUsername}", and your password is your "<first name>-<birth date>" ex. juan-1999-06-29`}
            />
            <form className="w-full mx-auto" onSubmit={onPdsSubmit}>
                <FormContainer title={"Personal Information"}>
                    <CInput
                        label={"Surname"}
                        name={"lastname"}
                        value={formData.personal_information.name.lastname}
                        onChange={handleNameChange}
                        required
                    />
                    <div className="grid grid-cols-12 gap-x-1">
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            className={"col-span-9"}
                            value={formData.personal_information.name.firstname}
                            onChange={handleNameChange}
                            required
                        />
                        <CInput
                            label={"Name Extension"}
                            name={"extension"}
                            className={"col-span-3"}
                            value={formData.personal_information.name.extension}
                            onChange={handleNameChange}
                        />
                    </div>
                    <CInput
                        label={"Middle Name"}
                        name={"middlename"}
                        value={formData.personal_information.name.middlename}
                        onChange={handleNameChange}
                        required
                    />
                    <hr className="bg-black" />
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                        <CInput
                            label={"Date of Birth"}
                            name={"birth_date"}
                            type="date"
                            className={"col-span-1"}
                            value={formData.personal_information.birth_date}
                            onChange={handlePersonalInfoChange}
                            required
                        />
                        <CInput
                            label={"Place of Birth"}
                            name={"birth_place"}
                            className={"col-span-1"}
                            value={formData.personal_information.birth_place}
                            onChange={handlePersonalInfoChange}
                        />
                    </div>
                    <div className="text-red-500">Sex:*</div>
                    <CRadio
                        name={"Male"}
                        value="male"
                        onChange={handleSexChange}
                        checked={formData.personal_information.gender == "male"}
                    />
                    <CRadio
                        name={"Female"}
                        value="female"
                        onChange={handleSexChange}
                        checked={
                            formData.personal_information.gender == "female"
                        }
                    />
                    <div className="mt-4">Civil Status:</div>
                    <CRadio
                        name={"Single"}
                        value={"single"}
                        onChange={handleCivilStatus}
                        checked={
                            formData.personal_information.civil_status ==
                            "single"
                        }
                    />
                    <CRadio
                        name={"Married"}
                        value={"married"}
                        onChange={handleCivilStatus}
                        checked={
                            formData.personal_information.civil_status ==
                            "married"
                        }
                    />
                    <CRadio
                        name={"Widowed"}
                        value={"widowed"}
                        onChange={handleCivilStatus}
                        checked={
                            formData.personal_information.civil_status ==
                            "widowed"
                        }
                    />
                    <CRadio
                        name={"Separated"}
                        value={"separated"}
                        onChange={handleCivilStatus}
                        checked={
                            formData.personal_information.civil_status ==
                            "separated"
                        }
                    />
                    <div className="grid md:grid-cols-12">
                        <CRadio
                            name={"Other/s"}
                            value={"other"}
                            className="col-span-1"
                            onChange={handleCivilStatus}
                            checked={
                                formData.personal_information.civil_status ==
                                "other"
                            }
                        />
                        {formData.personal_information.civil_status ==
                            "other" && (
                                <input
                                    type={"text"}
                                    name={"civil_status_other"}
                                    id={"floating_s"}
                                    className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder="Specify"
                                    value={
                                        formData.personal_information
                                            .civil_status_other
                                    }
                                    onChange={handlePersonalInfoChange}
                                />
                            )}
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Height (m)"}
                            name={"height"}
                            className="mt-2 col-span-1"
                            value={formData.personal_information.height}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"Weight (kg)"}
                            name={"weight"}
                            className="mt-2 col-span-1"
                            value={formData.personal_information.weight}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"Blood Type"}
                            name={"blood_type"}
                            className="mt-2 col-span-1"
                            value={formData.personal_information.blood_type}
                            onChange={handlePersonalInfoChange}
                        />
                    </div>
                    <hr className="bg-black" />
                    <div>Government IDs:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"GSIS ID No."}
                            name={"gsis_no"}
                            className="col-span-1"
                            value={formData.personal_information.gsis_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"PAG-IBIG ID No."}
                            name={"pagibig_no"}
                            className="col-span-1"
                            value={formData.personal_information.pagibig_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"PhilHealth No."}
                            name={"philhealth_no"}
                            className="col-span-1"
                            value={formData.personal_information.philhealth_no}
                            onChange={handlePersonalInfoChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"SSS No."}
                            name={"sss_no"}
                            className="col-span-1"
                            value={formData.personal_information.sss_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"TIN No."}
                            name={"tin_no"}
                            className="col-span-1"
                            value={formData.personal_information.tin_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"Agency Employee No."}
                            name={"agency_employee_no"}
                            className="col-span-1"
                            value={
                                formData.personal_information.agency_employee_no
                            }
                            onChange={handlePersonalInfoChange}
                            required
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4">Citizenship:</div>
                    <CRadio
                        name={"Filipino"}
                        value={"filipino"}
                        onChange={handleCitizenshipChange}
                        checked={
                            formData.personal_information.citizenship ==
                            "filipino"
                        }
                    />
                    <CRadio
                        name={"Dual Citizen"}
                        value={"is_dual"}
                        onChange={handleCitizenshipChange}
                        checked={
                            formData.personal_information.citizenship ==
                            "is_dual"
                        }
                    />
                    <CRadio
                        name={"by birth"}
                        value={"by_birth"}
                        onChange={handleCitizenshipChange}
                        checked={
                            formData.personal_information.citizenship ==
                            "by_birth"
                        }
                    />
                    <CRadio
                        name={"by Naturalization"}
                        value={"by_naturalization"}
                        onChange={handleCitizenshipChange}
                        checked={
                            formData.personal_information.citizenship ==
                            "by_naturalization"
                        }
                    />
                    {formData.personal_information.citizenship == "is_dual" && (
                        <div className="grid md:grid-cols-4 mb-4">
                            <div className="col-span-1">
                                If holder of dual citizenship, please indicate
                                the details
                            </div>
                            <input
                                type={"text"}
                                name={"citizenship_dual_country"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={
                                    formData.personal_information
                                        .citizenship_dual_country
                                }
                                onChange={handlePersonalInfoChange}
                            />
                        </div>
                    )}
                    <hr className="bg-black" />
                    <div className="mt-4 mb-2">Residential Address:</div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"House/Block/Lot Number"}
                            name={"house_no"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.house_no
                            }
                            onChange={handleResidentialAddressChange}
                        />
                        <CInput
                            label={"Street"}
                            name={"street"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.street
                            }
                            onChange={handleResidentialAddressChange}
                        />
                        <CInput
                            label={"Subdivision/Village"}
                            name={"subdivision"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.subdivision
                            }
                            onChange={handleResidentialAddressChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Barangay"}
                            name={"barangay"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.barangay
                            }
                            onChange={handleResidentialAddressChange}
                        />
                        <CInput
                            label={"City/Municipality"}
                            name={"city"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.city
                            }
                            onChange={handleResidentialAddressChange}
                        />
                        <CInput
                            label={"Province"}
                            name={"province"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.province
                            }
                            onChange={handleResidentialAddressChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Zip Code"}
                            name={"zipcode"}
                            className="col-span-1"
                            value={
                                formData.personal_information
                                    .residential_address.zipcode
                            }
                            onChange={handleResidentialAddressChange}
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4 mb-2">Permanent Address:</div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"House/Block/Lot Number"}
                            name={"house_no"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .house_no
                            }
                            onChange={handlePermanentAddressChange}
                        />
                        <CInput
                            label={"Street"}
                            name={"street"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .street
                            }
                            onChange={handlePermanentAddressChange}
                        />
                        <CInput
                            label={"Subdivision/Village"}
                            name={"subdivision"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .subdivision
                            }
                            onChange={handlePermanentAddressChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Barangay"}
                            name={"barangay"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .barangay
                            }
                            onChange={handlePermanentAddressChange}
                        />
                        <CInput
                            label={"City/Municipality"}
                            name={"city"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .city
                            }
                            onChange={handlePermanentAddressChange}
                        />
                        <CInput
                            label={"Province"}
                            name={"province"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .province
                            }
                            onChange={handlePermanentAddressChange}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Zip Code"}
                            name={"zipcode"}
                            className="col-span-1"
                            value={
                                formData.personal_information.permanent_address
                                    .zipcode
                            }
                            onChange={handlePermanentAddressChange}
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4">Contact Information:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Telephone No."}
                            name={"telephone_no"}
                            type="tel"
                            className={"col-span-1"}
                            value={formData.personal_information.telephone_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"Mobile number (123-456-7890)"}
                            name={"mobile_no"}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            type="tel"
                            className={"col-span-1"}
                            value={formData.personal_information.mobile_no}
                            onChange={handlePersonalInfoChange}
                        />
                        <CInput
                            label={"Email Address"}
                            name={"email"}
                            className={"col-span-1"}
                            value={formData.personal_information.email}
                            onChange={handlePersonalInfoChange}
                        />
                    </div>
                </FormContainer>
                <FormContainer title="Family Background">
                    <CInput
                        label={"Occupation"}
                        name={"occupation"}
                        value={formData.family_background.occupation}
                        onChange={handleFamilyBackgroundChange}
                    />
                    <CInput
                        label={"Employer/Business Name"}
                        name={"employer_business_name"}
                        value={
                            formData.family_background.employer_business_name
                        }
                        onChange={handleFamilyBackgroundChange}
                    />
                    <CInput
                        label={"Business Address"}
                        name={"business_address"}
                        value={formData.family_background.business_address}
                        onChange={handleFamilyBackgroundChange}
                    />
                    <CInput
                        label={"Telephone No."}
                        name={"telephone_no"}
                        type="tel"
                        value={formData.family_background.telephone_no}
                        onChange={handleFamilyBackgroundChange}
                    />
                    <div className="mt-4">Spouse:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Surname"}
                            name={"lastname"}
                            value={
                                formData.family_background.spouse_name.lastname
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            value={
                                formData.family_background.spouse_name.firstname
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"Middle Name"}
                            name={"middlename"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.spouse_name
                                    .middlename
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"extension"}
                            name={"extension"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.spouse_name.extension
                            }
                            onChange={handleSpouseName}
                        />
                    </div>
                    <div>Father:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Surname"}
                            name={"lastname"}
                            value={
                                formData.family_background.fathers_name.lastname
                            }
                            onChange={handleFatherName}
                        />
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            value={
                                formData.family_background.fathers_name
                                    .firstname
                            }
                            onChange={handleFatherName}
                        />
                        <CInput
                            label={"Middle Name"}
                            name={"middlename"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.fathers_name
                                    .middlename
                            }
                            onChange={handleFatherName}
                        />
                        <CInput
                            label={"Name Extension"}
                            name={"extension"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.fathers_name
                                    .extension
                            }
                            onChange={handleFatherName}
                        />
                    </div>
                    <div>Mother:</div>
                    <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Maiden's Name"}
                            name={"maidenname"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name
                                    .maidenname
                            }
                            onChange={handleMotherName}
                        />
                        <CInput
                            label={"Surname"}
                            name={"lastname"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name.lastname
                            }
                            onChange={handleMotherName}
                        />
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name
                                    .firstname
                            }
                            onChange={handleMotherName}
                        />
                        <CInput
                            label={"Middle Name"}
                            name={"middlename"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name
                                    .middlename
                            }
                            onChange={handleMotherName}
                        />
                    </div>
                    <hr className="bg-black mb-4" />
                    <InputFields
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer title={"Educational Background"}>
                    <div>Elementary:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            className={"col-span-2"}
                            name={
                                "educational_background.elementary.school_name"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            className={"col-span-2"}
                            name={"educational_background.elementary.degree"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Start"}
                            type="date"
                            name={
                                "educational_background.elementary.period_of_attendance.from"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            type="date"
                            name={
                                "educational_background.elementary.period_of_attendance.to"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            className={"col-span-2"}
                            name={
                                "educational_background.elementary.highest_unit"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Year Graduated"}
                            type="date"
                            name={
                                "educational_background.elementary.year_graduated"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            className={"col-span-2"}
                            name={
                                "educational_background.elementary.scholarship"
                            }
                            onChange={generalHandleChange}
                        />
                    </div>
                    <div>Secondary:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            className={"col-span-2"}
                            name={
                                "educational_background.secondary.school_name"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            className={"col-span-2"}
                            name={"educational_background.secondary.degree"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Start"}
                            type="date"
                            name={
                                "educational_background.secondary.period_of_attendance.from"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            type="date"
                            name={
                                "educational_background.secondary.period_of_attendance.to"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            className={"col-span-2"}
                            name={
                                "educational_background.secondary.highest_unit"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Year Graduated"}
                            type="date"
                            name={
                                "educational_background.secondary.year_graduated"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            className={"col-span-2"}
                            name={
                                "educational_background.secondary.scholarship"
                            }
                            onChange={generalHandleChange}
                        />
                    </div>
                    <div>Vocational / Trade Course:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            className={"col-span-2"}
                            name={
                                "educational_background.vocational.school_name"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            className={"col-span-2"}
                            name={"educational_background.vocational.degree"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Start"}
                            type="date"
                            name={
                                "educational_background.vocational.period_of_attendance.from"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            type="date"
                            name={
                                "educational_background.vocational.period_of_attendance.to"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            className={"col-span-2"}
                            name={
                                "educational_background.vocational.highest_unit"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Year Graduated"}
                            type="date"
                            name={
                                "educational_background.vocational.year_graduated"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            className={"col-span-2"}
                            name={
                                "educational_background.vocational.scholarship"
                            }
                            onChange={generalHandleChange}
                        />
                    </div>
                    <div>College:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            className={"col-span-2"}
                            name={"educational_background.college.school_name"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            className={"col-span-2"}
                            name={"educational_background.college.degree"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Start"}
                            type="date"
                            name={
                                "educational_background.college.period_of_attendance.from"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            type="date"
                            name={
                                "educational_background.college.period_of_attendance.to"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            className={"col-span-2"}
                            name={"educational_background.college.highest_unit"}
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Year Graduated"}
                            type="date"
                            name={
                                "educational_background.college.year_graduated"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            className={"col-span-2"}
                            name={"educational_background.college.scholarship"}
                            onChange={generalHandleChange}
                        />
                    </div>
                    <div>Graduate Studies:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            className={"col-span-2"}
                            name={
                                "educational_background.graduate_studies.school_name"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            className={"col-span-2"}
                            name={
                                "educational_background.graduate_studies.degree"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Start"}
                            type="date"
                            name={
                                "educational_background.graduate_studies.period_of_attendance.from"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            type="date"
                            name={
                                "educational_background.graduate_studies.period_of_attendance.to"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            className={"col-span-2"}
                            name={
                                "educational_background.graduate_studies.highest_unit"
                            }
                            onChange={generalHandleChange}
                        />
                        <CInput
                            label={"Year Graduated"}
                            type="date"
                            name={
                                "educational_background.graduate_studies.year_graduated"
                            }
                            onChange={generalHandleChange}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            className={"col-span-2"}
                            name={
                                "educational_background.graduate_studies.scholarship"
                            }
                            onChange={generalHandleChange}
                        />
                    </div>
                </FormContainer>
                <FormContainer title={"Civil Service Eligibility"}>
                    <InputFieldCivil
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer title={"Work Experience"}>
                    <InputFieldWE
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer
                    title={
                        "Voluntary Work or Involvement in Civic / Non-Government / People / Voluntary Organization/s"
                    }
                >
                    <InputFieldVW
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer
                    title={
                        "Learning and Development (L&D) Interventions/Training Programs Attended"
                    }
                >
                    <InputFieldLAD
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer title={"Other Information"}>
                    <InputFieldOI
                        formData={formData}
                        setFormData={setFormData}
                    />
                </FormContainer>
                <FormContainer title={"Addtional Questions"}>
                    <div>
                        34. Are you related by consanguinity or affinity to the
                        appointing or recommending authority, or to chief of
                        bureau or office or to the person who has immediate
                        supervision over you in the Bureau or Department where
                        you will be apppointed,
                    </div>
                    <div>a. within the third degree?</div>
                    <CRadio
                        name={"Yes34a"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq34a}
                        checked={formData.questions.q34.a}
                    />
                    <CRadio
                        name={"No34a"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq34a}
                        checked={!formData.questions.q34.a}
                    />
                    <div>
                        b. within the fourth degree (for Local Government Unit -
                        Career Employees)?
                    </div>
                    <CRadio
                        name={"Yes34b"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq34b}
                        checked={formData.questions.q34.b}
                    />
                    <CRadio
                        name={"No34b"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq34b}
                        checked={!formData.questions.q34.b}
                    />
                    {formData.questions.q34.b && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q34.details}
                                onChange={handleq34det}
                            />
                        </div>
                    )}
                    <div>35.</div>
                    <div>
                        a. Have you ever been found guilty of any administrative
                        offense?
                    </div>
                    <CRadio
                        name={"Yes35a"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq35a}
                        checked={formData.questions.q35.a.value}
                    />
                    <CRadio
                        name={"No35a"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq35a}
                        checked={!formData.questions.q35.a.value}
                    />
                    {formData.questions.q35.a.value && (
                        <div className="grid md:grid-cols-10 mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q35.a.details}
                                onChange={handleq35adet}
                            />
                        </div>
                    )}
                    <div>
                        b. Have you been criminally charged before any court?
                    </div>
                    <CRadio
                        name={"Yes"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq35b}
                        checked={formData.questions.q35.b.value}
                    />
                    <CRadio
                        name={"No"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq35b}
                        checked={!formData.questions.q35.b.value}
                    />
                    {formData.questions.q35.b.value && (
                        <>
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <div className="grid md:grid-cols-10 md:gap-x-6 ">
                                <div className="col-span-3">Date Filed:</div>
                                <div className="col-span-3">
                                    Status of Case/s:
                                </div>
                            </div>
                            <div className="grid md:grid-cols-10 md:gap-x-6 mb-4">
                                <input
                                    type={"date"}
                                    name={"cdetails"}
                                    id={"cdetails"}
                                    className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                    placeholder="Date Filed"
                                    value={
                                        formData.questions.q35.b.details
                                            .date_filed
                                    }
                                    onChange={handleq35bdetdf}
                                />
                                <input
                                    type={"text"}
                                    name={"cdetails"}
                                    id={"cdetails"}
                                    className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                    placeholder="Status"
                                    value={
                                        formData.questions.q35.b.details.case
                                    }
                                    onChange={handleq35bdetst}
                                />
                            </div>
                        </>
                    )}
                    <div>
                        36. Have you ever been convicted of any crime or
                        violation of any law, decree, ordinance or regulation by
                        any court or tribunal?
                    </div>
                    <CRadio
                        name={"Yes36"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq36}
                        checked={formData.questions.q36.value}
                    />
                    <CRadio
                        name={"No36"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq36}
                        checked={!formData.questions.q36.value}
                    />
                    {formData.questions.q36.value && (
                        <div className="grid md:grid-cols-10 mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q36.details}
                                onChange={handleq36dets}
                            />
                        </div>
                    )}
                    <div>
                        37. Have you ever been separated from the service in any
                        of the following modes: resignation, retirement, dropped
                        from the rolls, dismissal, termination, end of term,
                        finished contract or phased out (abolition) in the
                        public or private sector?
                    </div>
                    <CRadio
                        name={"Yes37"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq37}
                        checked={formData.questions.q37.value}
                    />
                    <CRadio
                        name={"No37"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq37}
                        checked={!formData.questions.q37.value}
                    />
                    {formData.questions.q37.value && (
                        <div className="grid md:grid-cols-10 mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q37.details}
                                onChange={handleq37dets}
                            />
                        </div>
                    )}
                    <div>38.</div>
                    <div>
                        a. Have you ever been a candidate in a national or local
                        election held within the last year (except Barangay
                        election)?
                    </div>
                    <CRadio
                        name={"Yes38a"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq38a}
                        checked={formData.questions.q38.a.value}
                    />
                    <CRadio
                        name={"No38a"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq38a}
                        checked={!formData.questions.q38.a.value}
                    />
                    {formData.questions.q38.a.value && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q38.a.details}
                                onChange={handleq38adet}
                            />
                        </div>
                    )}
                    <div>
                        b. Have you resigned from the government service during
                        the three (3)-month period before the last election to
                        promote/actively campaign for a national or local
                        candidate?
                    </div>
                    <CRadio
                        name={"Yes38b"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq38b}
                        checked={formData.questions.q38.b.value}
                    />
                    <CRadio
                        name={"No38b"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq38b}
                        checked={!formData.questions.q38.b.value}
                    />
                    {formData.questions.q38.b.value && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, give details:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q38.b.details}
                                onChange={handleq38bdet}
                            />
                        </div>
                    )}
                    <div>
                        39. Have you acquired the status of an immigrant or
                        permanent resident of another country?
                    </div>
                    <CRadio
                        name={"Yes39"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq39}
                        checked={formData.questions.q39.value}
                    />
                    <CRadio
                        name={"No39"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq39}
                        checked={!formData.questions.q39.value}
                    />
                    {formData.questions.q39.value && (
                        <div className="grid md:grid-cols-10 mb-4">
                            <div className="col-span-1">
                                If YES, give details (country):
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="country"
                                value={formData.questions.q39.details}
                                onChange={handleq39dets}
                            />
                        </div>
                    )}
                    <div>
                        40. Pursuant to: (a) Indigenous People's Act (RA 8371);
                        (b) Magna Carta for Disabled Persons (RA 7277); and (c)
                        Solo Parents Welfare Act of 2000 (RA 8972), please
                        answer the following
                    </div>
                    <div>a. Are you a member of any indigenous group?</div>
                    <CRadio
                        name={"Yes40a"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq40a}
                        checked={formData.questions.q40.a.value}
                    />
                    <CRadio
                        name={"No40a"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq40a}
                        checked={!formData.questions.q40.a.value}
                    />
                    {formData.questions.q40.a.value && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, please specify:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="details"
                                value={formData.questions.q40.a.details}
                                onChange={handleq40adet}
                            />
                        </div>
                    )}
                    <div>b. Are you a person with disability?</div>
                    <CRadio
                        name={"Yes40b"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq40b}
                        checked={formData.questions.q40.b.value}
                    />
                    <CRadio
                        name={"No40b"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq40b}
                        checked={!formData.questions.q40.b.value}
                    />
                    {formData.questions.q40.b.value && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, please specify ID No:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="ID No."
                                value={formData.questions.q40.b.details}
                                onChange={handleq40bdet}
                            />
                        </div>
                    )}
                    <div>c. Are you a solo parent?</div>
                    <CRadio
                        name={"Yes40c"}
                        label={"Yes"}
                        value={"yes"}
                        onChange={handleq40c}
                        checked={formData.questions.q40.c.value}
                    />
                    <CRadio
                        name={"No40c"}
                        label={"No"}
                        value={"no"}
                        onChange={handleq40c}
                        checked={!formData.questions.q40.c.value}
                    />
                    {formData.questions.q40.c.value && (
                        <div className="grid md:grid-cols-10  mb-4">
                            <div className="col-span-1">
                                If YES, please specify ID No:
                            </div>
                            <input
                                type={"text"}
                                name={"cdetails"}
                                id={"cdetails"}
                                className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                                placeholder="ID No."
                                value={formData.questions.q40.c.details}
                                onChange={handleq40cdet}
                            />
                        </div>
                    )}
                </FormContainer>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {pdsId ? 'Edit' : 'Save'}
                </button>
            </form>
        </>
    );
}
