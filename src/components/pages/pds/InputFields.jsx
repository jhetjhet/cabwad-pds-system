import React, { useState } from "react";

function InputFields() {
    const [fields, setFields] = useState([{ name: "", dob: "" }]);

    const handleChange = (index, key, value) => {
        const newFields = [...fields];
        newFields[index][key] = value;
        setFields(newFields);
    };

    const handleAddField = () => {
        setFields([...fields, { name: "", dob: "" }]);
    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    return (
        <div>
            Name of Children: (Write full name and list all)
            {fields.map((field, index) => (
                <div
                    key={index}
                    className="grid md:grid-cols-3 md:gap-6 items-center"
                >
                    <input
                        type="text"
                        placeholder="Name of Children"
                        value={field.name}
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-1`}
                        onChange={(e) =>
                            handleChange(index, "name", e.target.value)
                        }
                    />
                    <input
                        type="date"
                        placeholder="Date of Birth"
                        value={field.dob}
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer col-span-1`}
                        onChange={(e) =>
                            handleChange(index, "dob", e.target.value)
                        }
                    />
                    <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-20 h-8 px-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
                        onClick={() => handleRemoveField(index)}
                    >
                        Remove
                    </button>
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

export default InputFields;
