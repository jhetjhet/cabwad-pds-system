import React, { useState } from "react";
import { CInput, CRadio, FormContainer } from ".";
import InputFieldCivil from "./InputFieldCivil";
import InputFieldLAD from "./InputFieldLAD";
import InputFieldOI from "./InputFieldOI";
import InputFieldVW from "./InputFieldVW";
import InputFieldWE from "./InputFieldWE";
import InputFields from "./InputFields";
import { defaultVal } from "./constants/constant";

export default function PersonalInfoForm() {
    const [formData, setFormData] = useState(defaultVal);

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
                    [name]: value,
                },
            },
        }));
    };

    // const handleChildren = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         family_background: {
    //             ...prevState.family_background,
    //             childrens: [
    //                 ...prevState.family_background.childrens,
    //                 { [name]: value },
    //             ],
    //         },
    //     }));
    // };

    const handleEducationalBackgroundChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                [name]: value,
            },
        }));
    };

    const handleElementaryChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                elementary: {
                    ...prevState.educational_background.elementary,
                    [name]: value,
                },
            },
        }));
    };

    const handleSecondaryChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                secondary: {
                    ...prevState.educational_background.secondary,
                    [name]: value,
                },
            },
        }));
    };

    const handleVocationalChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                vocational: {
                    ...prevState.educational_background.vocational,
                    [name]: value,
                },
            },
        }));
    };

    const handleCollegeChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                college: {
                    ...prevState.educational_background.college,
                    [name]: value,
                },
            },
        }));
    };

    const handleGraduateStudiesChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            educational_background: {
                ...prevState.educational_background,
                graduate_studies: {
                    ...prevState.educational_background.graduate_studies,
                    [name]: value,
                },
            },
        }));
    };

    // Additional handleChange functions for other nested levels as needed

    console.log(formData);

    return (
        <>
            <form className="w-full mx-auto">
                <FormContainer title={"Personal Information"}>
                    <CInput
                        label={"Surname"}
                        name={"lastname"}
                        value={formData.personal_information.name.lastname}
                        onChange={handleNameChange}
                    />
                    <div className="grid grid-cols-12 gap-x-1">
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            className={"col-span-9"}
                            value={formData.personal_information.name.firstname}
                            onChange={handleNameChange}
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
                        />
                        <CInput
                            label={"Place of Birth"}
                            name={"birth_date"}
                            className={"col-span-1"}
                            value={formData.personal_information.birth_date}
                            onChange={handlePersonalInfoChange}
                        />
                    </div>
                    <div>Sex:</div>
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
                            name={"zipcode"}
                            className={"col-span-1"}
                            value={formData.personal_information.zipcode}
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
                            name={"floating_company"}
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
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            value={
                                formData.family_background.fathers_name
                                    .firstname
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"Middle Name"}
                            name={"middlename"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.fathers_name
                                    .middlename
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"Name Extension"}
                            name={"extension"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.fathers_name
                                    .extension
                            }
                            onChange={handleSpouseName}
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
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"Surname"}
                            name={"lastname"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name.lastname
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"First Name"}
                            name={"firstname"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name
                                    .firstname
                            }
                            onChange={handleSpouseName}
                        />
                        <CInput
                            label={"Middle Name"}
                            name={"middlename"}
                            className={"col-span-1"}
                            value={
                                formData.family_background.mothers_name
                                    .middlename
                            }
                            onChange={handleSpouseName}
                        />
                    </div>
                    <hr className="bg-black mb-4" />
                    <InputFields />
                </FormContainer>
                <FormContainer title={"Educational Background"}>
                    <div>Elementary:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Start"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Year Graduated"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                    </div>
                    <div>Secondary:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Start"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Year Graduated"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                    </div>
                    <div>Vocational / Trade Course:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Start"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Year Graduated"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                    </div>
                    <div>College:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Start"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Year Graduated"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                    </div>
                    <div>Graduate Studies:</div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Name of School"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Basic Education/Degree/Course"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Start"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"End"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                    </div>
                    <div className="grid md:grid-cols-6 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Highest Level/Units Earned"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                        <CInput
                            label={"Year Graduated"}
                            name={"floating_es"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Scholarship/Academic Honors Received"}
                            name={"floating_es"}
                            className={"col-span-2"}
                        />
                    </div>
                </FormContainer>
                <FormContainer title={"Civil Service Eligibility"}>
                    <InputFieldCivil />
                </FormContainer>
                <FormContainer title={"Work Experience"}>
                    <InputFieldWE />
                </FormContainer>
                <FormContainer
                    title={
                        "Voluntary Work or Involvement in Civic / Non-Government / People / Voluntary Organization/s"
                    }
                >
                    <InputFieldVW />
                </FormContainer>
                <FormContainer
                    title={
                        "Learning and Development (L&D) Interventions/Training Programs Attended"
                    }
                >
                    <InputFieldLAD />
                </FormContainer>
                <FormContainer title={"Other Information"}>
                    <InputFieldOI />
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
                    <CRadio name={"Yes"} id={"floating_a34"} type="radio" />
                    <CRadio name={"No"} id={"floating_a34"} type="radio" />
                    <div>
                        b. within the fourth degree (for Local Government Unit -
                        Career Employees)?
                    </div>
                    <CRadio name={"Yes"} id={"floating_b34"} type="radio" />
                    <CRadio name={"No"} id={"floating_b34"} type="radio" />
                    <div className="grid md:grid-cols-10  mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>35.</div>
                    <div>
                        a. Have you ever been found guilty of any administrative
                        offense?
                    </div>
                    <CRadio name={"Yes"} id={"floating_a35"} type="radio" />
                    <CRadio name={"No"} id={"floating_a35"} type="radio" />
                    <div className="grid md:grid-cols-10 mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>
                        b. Have you been criminally charged before any court?
                    </div>
                    <CRadio name={"Yes"} id={"floating_b35"} type="radio" />
                    <CRadio name={"No"} id={"floating_b35"} type="radio" />
                    <div className="col-span-1">If YES, give details:</div>
                    <div className="grid md:grid-cols-10 md:gap-x-6 ">
                        <div className="col-span-3">Date Filed:</div>
                        <div className="col-span-3">Status of Case/s:</div>
                    </div>
                    <div className="grid md:grid-cols-10 md:gap-x-6 mb-4">
                        <input
                            type={"date"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="Date Filed"
                        />
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="Status"
                        />
                    </div>
                    <div>
                        36. Have you ever been convicted of any crime or
                        violation of any law, decree, ordinance or regulation by
                        any court or tribunal?
                    </div>
                    <CRadio name={"Yes"} id={"floating_36"} type="radio" />
                    <CRadio name={"No"} id={"floating_36"} type="radio" />
                    <div className="grid md:grid-cols-10 mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>
                        37. Have you ever been separated from the service in any
                        of the following modes: resignation, retirement, dropped
                        from the rolls, dismissal, termination, end of term,
                        finished contract or phased out (abolition) in the
                        public or private sector?
                    </div>
                    <CRadio name={"Yes"} id={"floating_37"} type="radio" />
                    <CRadio name={"No"} id={"floating_37"} type="radio" />
                    <div className="grid md:grid-cols-10 mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>38.</div>
                    <div>
                        a. Have you ever been a candidate in a national or local
                        election held within the last year (except Barangay
                        election)?
                    </div>
                    <CRadio name={"Yes"} id={"floating_b38"} type="radio" />
                    <CRadio name={"No"} id={"floating_b38"} type="radio" />
                    <div className="grid md:grid-cols-10  mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>
                        b. Have you resigned from the government service during
                        the three (3)-month period before the last election to
                        promote/actively campaign for a national or local
                        candidate?
                    </div>
                    <CRadio name={"Yes"} id={"floating_b38"} type="radio" />
                    <CRadio name={"No"} id={"floating_b38"} type="radio" />
                    <div className="grid md:grid-cols-10  mb-4">
                        <div className="col-span-1">If YES, give details:</div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <div>
                        39. Have you acquired the status of an immigrant or
                        permanent resident of another country?
                    </div>
                    <CRadio name={"Yes"} id={"floating_39"} type="radio" />
                    <CRadio name={"No"} id={"floating_39"} type="radio" />
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
                        />
                    </div>
                    <div>
                        40. Pursuant to: (a) Indigenous People's Act (RA 8371);
                        (b) Magna Carta for Disabled Persons (RA 7277); and (c)
                        Solo Parents Welfare Act of 2000 (RA 8972), please
                        answer the following
                    </div>
                    <div>a. Are you a member of any indigenous group?</div>
                    <CRadio name={"Yes"} id={"floating_b38"} type="radio" />
                    <CRadio name={"No"} id={"floating_b38"} type="radio" />
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
                        />
                    </div>
                    <div>b. Are you a person with disability?</div>
                    <CRadio name={"Yes"} id={"floating_b38"} type="radio" />
                    <CRadio name={"No"} id={"floating_b38"} type="radio" />
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
                        />
                    </div>
                    <div>Are you a solo parent?</div>
                    <CRadio name={"Yes"} id={"floating_b38"} type="radio" />
                    <CRadio name={"No"} id={"floating_b38"} type="radio" />
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
                        />
                    </div>
                </FormContainer>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
