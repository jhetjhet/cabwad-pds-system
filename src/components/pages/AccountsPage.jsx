import ReactPaginate from "react-paginate";
import { CInput, CModal, CSearchBar, createToast } from "../forms";
import { useEffect, useRef, useState } from "react";
import { createUser, deleteUser, listUsers, updateUser } from "../../api/auth.crud";
import Select from 'react-select';
import { Field, Form, Formik } from "formik";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useAuth } from "../AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import { EMPLOYEE } from "./pds/constants/constant";

const SUPER_ADMIN = 1;
const ADMIN = 2;

const ROLES = {
    [SUPER_ADMIN]: 'Super Admin',
    [ADMIN]: 'Admin',
    [EMPLOYEE]: 'Employee',
}

const options = [
    { value: SUPER_ADMIN, label: 'Super Admin' },
    { value: ADMIN, label: 'Admin' },
    { value: EMPLOYEE, label: 'Employee' },
];

const DEFAULT_USER_DETAILS = {
    username: "",
    password: "",
    roles: [
        ADMIN,
    ]
};

const UserFormModal = ({ show, setShow, title, loadedUser, onSubmit, updateMode = false }) => {
    const [user, setUser] = useState();

    const submitRef = useRef();

    useEffect(() => {
        setUser(initUser(loadedUser));
    }, [loadedUser]);

    const initUser = (userData) => {
        let newUser = {};
        if (userData) {
            newUser.username = userData.username;
            newUser.password = "";
            newUser.roles = userData.roles.map((r) => ({
                value: r.code,
                label: r.name,
            }));
        }
        else {
            newUser = { ...DEFAULT_USER_DETAILS };
            newUser.roles = newUser.roles.map((r) => (
                {
                    value: r,
                    label: ROLES[r],
                }
            ));
        }

        return newUser;
    }

    const __onSubmit = () => {
        if (submitRef) {
            submitRef.current.click();
        }
    }

    return (
        <CModal
            show={show}
            setShow={setShow}
            title={title}
            onTrigger={__onSubmit}
        >
            {user && (
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        ...user
                    }}
                    onSubmit={(values, { setValues }) => {
                        if (onSubmit) {
                            onSubmit(values);
                        }
                        setShow(false);

                        let newUser = initUser(null);

                        setValues(newUser);
                        setUser(newUser);
                    }}
                >
                    {({ values, setFieldValue, isSubmitting, errors }) => (
                        <Form>
                            <div className="w-full pr-2">
                                <Select
                                    className="mb-6"
                                    options={options}
                                    name="roles"
                                    isMulti
                                    value={values.roles}
                                    onChange={(newOptions) => setFieldValue('roles', newOptions)}
                                    placeholder="Select roles"
                                />
                                <label
                                    htmlFor="username"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Username
                                </label>
                                <Field
                                    id="username"
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    label="Username"
                                    required
                                    value={values.username}
                                    name="username"
                                    placeholder="Username"
                                // isFormik
                                />
                                <Field
                                    id="password"
                                    className={`mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    label={updateMode ? "Set new password" : "Password"}
                                    type="password"
                                    required={!updateMode}
                                    value={values.password}
                                    name="password"
                                    placeholder="Enter new password"
                                // isFormik
                                />
                            </div>
                            <button ref={submitRef} type="submit" hidden />
                        </Form>
                    )}
                </Formik>
            )}
        </CModal>
    )
}

export default function AccountsPage() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);

    const [showUserForm, setShowUserForm] = useState(false);

    const [targetUser, setTargetUser] = useState();

    const { user: authUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        initUsersList(page);
    }, []);

    const initUsersList = (targetPage = 0, search) => {
        targetPage++;

        const params = {
            page: targetPage,
        }

        if (search) {
            params.username = search;
        }

        listUsers(params).then((resp) => {
            setPageCount(resp.data.totalPages);
            setUsers(resp.data?.users);
        });
    }

    const handlePageClick = (e) => {
        setPage(e.selected);
        initUsersList(e.selected);
    }

    const onUserDelete = (id, name) => {
        deleteUser(id).then((() => {
            createToast('success', `User "${name}" is deleted successfuly!`);
        })).catch((error) => {
            if (error?.response?.data) {
                createToast('error', error?.response?.data);
            }
            else {
                createToast('error', "Something went wrong.");
            }
        }).finally(() => {
            initUsersList(page);
        });
    }

    const onUserFormSubmit = (data) => {
        let submitValue = { ...data };
        submitValue.roles = submitValue.roles.map((r) => r.value);

        if (targetUser) {
            updateUser(targetUser._id, submitValue).then((resp) => {
                createToast('success', `User "${targetUser.username}" is updated successfuly!`);
                setTargetUser(null);
            }).catch((error) => {
                if (error?.response?.data) {
                    createToast('error', error?.response?.data);
                }
                else {
                    createToast('error', "Something went wrong.");
                }
            }).finally(() => initUsersList(page));
        }
        else {
            createUser(submitValue).then((resp) => {
                createToast('success', `User "${data.username}" is created successfuly!`);
            }).catch((error) => {
                if (error?.response?.data) {
                    createToast('error', error?.response?.data);
                }
                else {
                    createToast('error', "Something went wrong.");
                }
            }).finally(() => initUsersList(page));
        }
    }

    const onSearch = (value) => {
        initUsersList(page, value);
    }

    return (
        <div className="bg-gray-100 min-h-[32rem] rounded-lg shadow-md flex flex-col">

            <UserFormModal
                show={showUserForm}
                setShow={setShowUserForm}
                title={targetUser ? `Update "${targetUser.username}"` : "Create New User"}
                onSubmit={onUserFormSubmit}
                loadedUser={targetUser}
                updateMode={Boolean(targetUser)}
            />

            <div className="p-4 flex">
                <h1 className="text-3xl">
                    Accounts
                </h1>
            </div>
            <div className="flex items-center content-center w-100 px-8">
                <div className="">
                    <CSearchBar onSearch={onSearch} />
                </div>
                {authUser?.is_super_admin && (
                    <button type="button" className="ml-3 text-md bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            setTargetUser(null);
                            setShowUserForm(true);
                        }}
                    >
                        create
                    </button>
                )}
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Role</th>
                            <th></th>
                        </tr>
                        {users.map((user) => (
                            <tr className="border-b hover:bg-orange-100 even:bg-gray-100 odd:bg-white" key={user._id}>
                                <td className="p-3 px-5">
                                    <span>{user.username}</span>
                                </td>
                                <td className="p-3 px-5">
                                    {/* <p>{[...user.roles.map((role) => role.name)].join(", ")}</p> */}
                                    {user.roles.map((r) => (
                                        <span key={r._id} className="px-2 py-1 bg-yellow-300 rounded-xl mx-1 text-xs">{r.name}</span>
                                    ))}
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <button type="button" disabled={!authUser?.is_super_admin} className={`disabled:opacity-50 mr-3 text-sm text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline ${user.pds ? "bg-green-500 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"}`}
                                        onClick={() => {
                                            if (user.pds) {
                                                navigate(`/pds-form/${user.pds}`);
                                            }
                                            else {
                                                navigate(`/user-pds-form/${user._id}`);
                                            }
                                        }}
                                    >
                                        {user.pds ? "Edit pds" : "Create pds"}
                                    </button>
                                    <button type="button" disabled={!authUser?.is_super_admin} className="disabled:opacity-50 mr-3 text-sm bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => {
                                            setTargetUser(user);
                                            setShowUserForm(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    {(authUser?.is_super_admin) && (
                                        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => onUserDelete(user._id, user.name)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr className="border-b hover:bg-orange-100 even:bg-gray-100 odd:bg-white">
                                <td className="p-3 px-5 col-auto" colSpan={100}>
                                    <span>No users found.</span>
                                </td>
                            </tr>
                        )}
                        {/* <tr className="border-b hover:bg-orange-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent" /></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                    Save
                                </button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-orange-100">
                            <td className="p-3 px-5"><input type="text" value="user.name" className="bg-transparent" /></td>
                            <td className="p-3 px-5">
                                <select value="user.role" className="bg-transparent">
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                    Save
                                </button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                    Delete
                                </button>
                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
            <div className="w-100 flex justify-end pb-2">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    // forcePage={page}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}

                    breakClassName="" // The classname on tag li of the ellipsis element.
                    breakLinkClassName="inline-block px-3 py-1 text-blue-500 cursor-pointer" // The classname on tag a of the ellipsis element.

                    className="mr-8" // Same as containerClassName. For use with styled-components & other CSS-in-JS.
                    containerClassName="flex p-2 space-x-3" // The classname of the pagination container.
                    pageClassName="inline-block px-3 py-1 text-blue-500 cursor-pointer" // The classname on tag li of each page element.
                    pageLinkClassName="" // The classname on tag a of each page element.
                    activeClassName="bg-blue-500 text-white" // The classname for the active page. It is concatenated to base class pageClassName.
                    activeLinkClassName="text-white" // The classname on the active tag a. It is concatenated to base class pageLinkClassName.
                    previousClassName="inline-block px-3 py-1 text-blue-500 cursor-pointer" // The classname on tag li of the previous button.
                    nextClassName="inline-block px-3 py-1 text-blue-500 cursor-pointer" // The classname on tag li of the next button.
                    previousLinkClassName="" // The classname on tag a of the previous button.
                    nextLinkClassName="" // The classname on tag a of the next button.
                    disabledClassName="" // The classname for disabled previous and next buttons.
                    disabledLinkClassName="" // The classname on tag a for disabled previous and next buttons.
                />
            </div>
        </div>
    );
}
