import React, { useState } from "react";

function InputFieldDA({ formData, setFormData, viewMode = false }) {

    const handleChange = (index, key, value) => {
        const newFields = [...formData.disciplinary_actions];
        newFields[index][key] = value;

        let newFormData = { ...formData };
        newFormData.disciplinary_actions = newFields;

        setFormData(newFormData);
    };

    const handleAddField = () => {
        let newFields = [
            ...formData.disciplinary_actions,
            {
                memo_no: "",
                order_no: "",
                case: "",
                date: "",
                sanction: "",
            },
        ];

        let newFormData = { ...formData };
        newFormData.disciplinary_actions = newFields;

        setFormData(newFormData);
    };

    const handleRemoveField = (index) => {
        const newFields = [...formData.disciplinary_actions];
        newFields.splice(index, 1);

        let newFormData = { ...formData };
        newFormData.disciplinary_actions = newFields;

        setFormData(newFormData);
    };

    return (
        <table className="table-fixed w-full">
            <thead className="border-2">
                <tr>
                    <th className="w-48 border-2">Office Memo no.</th>
                    <th className="w-48 border-2">Office Order no.</th>
                    <th className="border-2">Case</th>
                    <th className="w-40 border-2">Date</th>
                    <th className="border-2">Sanction</th>
                    {!viewMode && <th className="border-2 w-16" />}
                </tr>
            </thead>
            <tbody>
                {formData.disciplinary_actions.map((field, index) => (
                    <tr key={index}>
                        <td className="w-48 border-2 p-2 text-center">
                            {viewMode ? (
                                field.memo_no
                            ) : (
                                <input
                                    type="text"
                                    placeholder=""
                                    value={field.memo_no}
                                    name="memo_no"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "memo_no",
                                            e.target.value
                                        )
                                    }
                                    className="p-2 w-full text-center"
                                />
                            )}
                        </td>
                        <td className="w-48 border-2 p-2 text-center">
                            {viewMode ? (
                                field.order_no
                            ) : (
                                <input
                                    type="text"
                                    placeholder=""
                                    value={field.order_no}
                                    name="order_no"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "order_no",
                                            e.target.value
                                        )
                                    }
                                    className="p-2 w-full text-center"
                                />
                            )}
                        </td>
                        <td className="border-2 p-2">
                            {viewMode ? (
                                field.case
                            ) : (
                                <input
                                    type="text"
                                    placeholder=""
                                    value={field.case}
                                    name="case"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "case",
                                            e.target.value
                                        )
                                    }
                                    className="p-2 w-full"
                                />
                            )}
                        </td>
                        <td className="w-40 border-2 p-2 text-center">
                            {viewMode ? (
                                field.date
                            ) : (
                                <input
                                    type="date"
                                    placeholder=""
                                    value={field.date}
                                    name="date"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "date",
                                            e.target.value
                                        )
                                    }
                                    className="p-2 w-full text-center"
                                />
                            )}
                        </td>
                        <td className="border-2 p-2">
                            {viewMode ? (
                                field.sanction
                            ) : (
                                <input
                                    type="text"
                                    placeholder=""
                                    value={field.sanction}
                                    name="sanction"
                                    onChange={(e) =>
                                        handleChange(
                                            index,
                                            "sanction",
                                            e.target.value
                                        )
                                    }
                                    className="p-2 w-full"
                                />
                            )}
                        </td>
                        {!viewMode && (
                            <td className="border-2 p-2">
                                <button
                                    type="button"
                                    className="bg-red-500 w-8 h-8 p-0 text-white rounded-full text-center"
                                    onClick={() => handleRemoveField(index)}
                                >
                                    X
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
                {!viewMode && (
                    <tr>
                        <td className="border-2 p-2" colSpan={6}>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="ml-auto mr-4 p-0 bg-green-500 w-8 h-8 text-white rounded-full text-center"
                                    onClick={() => handleAddField()}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )

    return (
        <div>
            {formData.other_information.map((field, index) => (
                <div key={index} className="grid grid-cols-3 gap-x-4 ">
                    {/* Special Skills and Hobbies */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            placeholder=" "
                            value={field.skill}
                            name="skill"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "skill",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"skill"}
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
                            value={field.recognition}
                            name="recognition"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "recognition",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"recognition"}
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
                            value={field.membership}
                            name="membership"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "membership",
                                    e.target.value
                                )
                            }
                            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        />
                        <label
                            htmlFor={"membership"}
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Membership in Association/Organization
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <button
                            type="button"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-20 h-8 px-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-4"
                            onClick={() => handleRemoveField(index)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddField}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
                Add Field
            </button>
        </div>
    );
}

export default InputFieldDA;
