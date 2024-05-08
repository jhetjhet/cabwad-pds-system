import { Field } from "formik";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export function CInput({ label, id, type = "text", name, className, isFormik = false, required = false, errorMessage, hasError = false }) {

    return (
        <>
            <div className={`relative z-0 w-full mb-5 group ${className}`}>
                {isFormik ? (
                    <Field type={type} name={name} id={id}
                        required={required}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                ) : (
                    <input type={type} name={name} id={id}
                        required={required}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    />
                )}
                <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    {label}
                </label>
            </div>
            <span className="text-red-400">This field is required</span>
        </>
    );
}

export function CSearchBar({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSearch) {
            onSearch(searchValue);
        }
        setSearchValue("");
    }

    return (
        <form onSubmit={onSubmit} className="pt-2 mb-2 relative mx-auto text-gray-600 w-fit">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" xmlSpace="preserve"
                    width="512px" height="512px"
                    style={{
                        enableBackground: 'new 0 0 56.966 56.966',
                    }}
                >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button>
        </form>
    );
}

export function CModal({ show, setShow, title, children, onTrigger }) {

    return (
        <div className={`relative z-10 ${show ? 'block' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                            <div className="sm:flex sm:items-start w-full">
                                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div> */}
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <h3 className="mb-6 text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                        {title}
                                    </h3>
                                    <div className="mt-2 w-full">
                                        {children}
                                        {/* <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                onClick={() => {
                                    if (onTrigger) {
                                        onTrigger();
                                    }
                                }}
                            >
                                Save
                            </button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setShow(false)}
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function createToast(type, message) {
    toast(message, {
        position: "bottom-left",
        type: type,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}


export function InfoModal({ show, setShow, title, message }) {

    return (
        <div
            className={`${show ? 'block' : 'hidden'} fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}>
            <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">
                <div className="my-8 text-center">
                    <h4 className="text-xl font-semibold mt-6">{title}</h4>
                    <p className="text-sm text-gray-500 mt-4">
                        {message}
                    </p>
                </div>
                <div className="flex flex-col space-y-2">
                    <button type="button"
                        className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-green-500 hover:bg-green-600 active:bg-green-500"
                        onClick={() => setShow(false)}
                    >Got it</button>
                </div>
            </div>
        </div>
    )
}