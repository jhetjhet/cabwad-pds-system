import { CInput, CRadio, FormContainer } from ".";
import InputFieldCivil from "./InputFieldCivil";
import InputFieldLAD from "./InputFieldLAD";
import InputFieldOI from "./InputFieldOI";
import InputFieldVW from "./InputFieldVW";
import InputFieldWE from "./InputFieldWE";
import InputFields from "./InputFields";

export default function PersonalInfoForm() {
    return (
        <>
            <form className="w-full mx-auto">
                <FormContainer title={"Personal Information"}>
                    <CInput label={"Surname"} name={"floating_email"} />
                    <div className="grid grid-cols-12 gap-x-1">
                        <CInput
                            label={"First Name"}
                            name={"floating_email"}
                            className={"col-span-9"}
                        />
                        <CInput
                            label={"Name Extension"}
                            name={"floating_email"}
                            className={"col-span-3"}
                        />
                    </div>
                    <CInput label={"Middle Name"} name={"floating_email"} />
                    <hr className="bg-black" />
                    <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                        <CInput
                            label={"Date of Birth"}
                            name={"floating_bdate"}
                            type="date"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Place of Birth"}
                            name={"floating_bplace"}
                            className={"col-span-1"}
                        />
                    </div>
                    <div>Sex:</div>
                    <CRadio name={"Male"} id={"floating_sex"} type="radio" />
                    <CRadio name={"Female"} id={"floating_sex"} type="radio" />
                    <div className="mt-4">Civil Status:</div>
                    <CRadio name={"Single"} id={"floating_sex"} type="radio" />
                    <CRadio name={"Married"} id={"floating_sex"} type="radio" />
                    <CRadio name={"Widowed"} id={"floating_sex"} type="radio" />
                    <CRadio
                        name={"Separated"}
                        id={"floating_sex"}
                        type="radio"
                    />
                    <div className="grid md:grid-cols-12">
                        <CRadio
                            name={"Other/s"}
                            id={"floating_sex"}
                            type="radio"
                            className="col-span-1"
                        />
                        <input
                            type={"text"}
                            name={"Other/s Input"}
                            id={"floating_s"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                            placeholder="Specify"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Height (m)"}
                            name={"floating_h"}
                            className="mt-2 col-span-1"
                        />
                        <CInput
                            label={"Weight (kg)"}
                            name={"floating_w"}
                            className="mt-2 col-span-1"
                        />
                        <CInput
                            label={"Blood Type"}
                            name={"floating_bt"}
                            className="mt-2 col-span-1"
                        />
                    </div>
                    <hr className="bg-black" />
                    <div>Government IDs:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"GSIS ID No."}
                            name={"floating_h"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"PAG-IBIG ID No."}
                            name={"floating_h"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"PhilHealth No."}
                            name={"floating_w"}
                            className="col-span-1"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"SSS No."}
                            name={"floating_bt"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"TIN No."}
                            name={"floating_w"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Agency Employee No."}
                            name={"floating_bt"}
                            className="col-span-1"
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4">Citizenship:</div>
                    <CRadio
                        name={"Filipino"}
                        id={"floating_citizenship"}
                        type="radio"
                    />
                    <CRadio
                        name={"Dual Citizen"}
                        id={"floating_citizenship"}
                        type="radio"
                    />
                    <CRadio
                        name={"by birth"}
                        id={"floating_citizenship"}
                        type="radio"
                    />
                    <CRadio
                        name={"by Naturalization"}
                        id={"floating_citizenship"}
                        type="radio"
                    />
                    <div className="grid md:grid-cols-4 mb-4">
                        <div className="col-span-1">
                            If holder of dual citizenship, please indicate the
                            details
                        </div>
                        <input
                            type={"text"}
                            name={"cdetails"}
                            id={"cdetails"}
                            className={`block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-3`}
                            placeholder="details"
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4 mb-2">Residential Address:</div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"House/Block/Lot Number"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Street"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Subdivision/Village"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Barangay"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"City/Municipality"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Province"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Zip Code"}
                            name={"floating_ra"}
                            className="col-span-1"
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4 mb-2">Permanent Address:</div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"House/Block/Lot Number"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Street"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Subdivision/Village"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Barangay"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"City/Municipality"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                        <CInput
                            label={"Province"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <CInput
                            label={"Zip Code"}
                            name={"floating_pa"}
                            className="col-span-1"
                        />
                    </div>
                    <hr className="bg-black" />
                    <div className="mt-4">Contact Information:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput
                            label={"Telephone No."}
                            name={"floating_phone"}
                            type="tel"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Mobile number (123-456-7890)"}
                            name={"floating_phone"}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            type="tel"
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Email Address"}
                            name={"floating_company"}
                            className={"col-span-1"}
                        />
                    </div>
                </FormContainer>
                <FormContainer title="Family Background">
                    <CInput label={"Occupation"} name={"floating_fbcompany"} />
                    <CInput label={"Occupation"} name={"floating_fbcompany"} />
                    <CInput
                        label={"Business Address"}
                        name={"floating_fbcompany"}
                    />
                    <CInput
                        label={"Telephone No."}
                        name={"floating_fbcompany"}
                        type="tel"
                    />
                    <div className="mt-4">Spouse:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput label={"Surname"} name={"floating_phone"} />
                        <CInput label={"First Name"} name={"floating_phone"} />
                        <CInput
                            label={"Email Address"}
                            name={"floating_company"}
                            className={"col-span-1"}
                        />
                    </div>
                    <div>Father:</div>
                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <CInput label={"Surname"} name={"floating_phone"} />
                        <CInput label={"First Name"} name={"floating_phone"} />
                        <CInput
                            label={"Email Address"}
                            name={"floating_company"}
                            className={"col-span-1"}
                        />
                    </div>
                    <div>Mother:</div>
                    <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-0 mt-2">
                        <CInput
                            label={"Maiden's Name"}
                            name={"floating_phone"}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Surname"}
                            name={"floating_phone"}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"First Name"}
                            name={"floating_phone"}
                            className={"col-span-1"}
                        />
                        <CInput
                            label={"Email Address"}
                            name={"floating_company"}
                            className={"col-span-1"}
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
