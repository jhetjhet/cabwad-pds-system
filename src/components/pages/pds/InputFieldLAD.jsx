import React, { useState } from "react";

function InputFieldLAD() {
    const [fields, setFields] = useState([
        {
            title: "",
            inclusiveDateFrom: "",
            inclusiveDateTo: "",
            numberOfHours: "",
            typeOfLD: "",
            conductedSponsoredBy: "",
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
                title: "",
                inclusiveDateFrom: "",
                inclusiveDateTo: "",
                numberOfHours: "",
                typeOfLD: "",
                conductedSponsoredBy: "",
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
                    {/* Title of Learning and Development Interventions/Training Programs */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.title}
                            name="title"
                            onChange={(e) =>
                                handleChange(index, "title", e.target.value)
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"title"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Title of Learning and Development
                            Interventions/Training Programs
                        </label>
                    </div>
                    {/* Inclusive Date of Attendance From */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            placeholder=" "
                            value={field.inclusiveDateFrom}
                            name="inclusiveDateFrom"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "inclusiveDateFrom",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"inclusiveDateFrom"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Inclusive Date of Attendance From
                        </label>
                    </div>
                    {/* Inclusive Date of Attendance To */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            placeholder=" "
                            value={field.inclusiveDateTo}
                            name="inclusiveDateTo"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "inclusiveDateTo",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"inclusiveDateTo"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Inclusive Date of Attendance To
                        </label>
                    </div>
                    {/* Number of Hours */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.numberOfHours}
                            name="numberOfHours"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "numberOfHours",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"numberOfHours"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Number of Hours
                        </label>
                    </div>
                    {/* Type of LD */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.typeOfLD}
                            name="typeOfLD"
                            onChange={(e) =>
                                handleChange(index, "typeOfLD", e.target.value)
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"typeOfLD"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Type of LD
                        </label>
                    </div>
                    {/* Conducted/Sponsored by */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.conductedSponsoredBy}
                            name="conductedSponsoredBy"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "conductedSponsoredBy",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"conductedSponsoredBy"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Conducted/Sponsored by
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

export default InputFieldLAD;
