import React, { useState } from "react";

function InputFieldOI() {
    const [fields, setFields] = useState([
        {
            specialSkillsAndHobbies: "",
            nonAcademicDistinctionsRecognition: "",
            membershipInAssociationOrganization: "",
        },
    ]);

    const handleChange = (index, key, value) => {
        const newFields = [...fields];
        newFields[index][key] = value;
        setFields(newFields);
    };

    const handleAddField = () => {
        setFields([
            ...fields,
            {
                specialSkillsAndHobbies: "",
                nonAcademicDistinctionsRecognition: "",
                membershipInAssociationOrganization: "",
            },
        ]);
    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    return (
        <div>
            {fields.map((field, index) => (
                <div key={index} className="grid grid-cols-3 gap-x-4 ">
                    {/* Special Skills and Hobbies */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.specialSkillsAndHobbies}
                            name="specialSkillsAndHobbies"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "specialSkillsAndHobbies",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"specialSkillsAndHobbies"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Special Skills and Hobbies
                        </label>
                    </div>
                    {/* Non-Academic Distinctions / Recognition */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.nonAcademicDistinctionsRecognition}
                            name="nonAcademicDistinctionsRecognition"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "nonAcademicDistinctionsRecognition",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"nonAcademicDistinctionsRecognition"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Non-Academic Distinctions / Recognition
                        </label>
                    </div>
                    {/* Membership in Association/Organization */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.membershipInAssociationOrganization}
                            name="membershipInAssociationOrganization"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "membershipInAssociationOrganization",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"membershipInAssociationOrganization"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Membership in Association/Organization
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-20 h-8 px-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-4"
                            onClick={() => handleRemoveField(index)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <button
                onClick={handleAddField}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
                Add Field
            </button>
        </div>
    );
}

export default InputFieldOI;
