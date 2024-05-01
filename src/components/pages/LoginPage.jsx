import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api/base";
import { useAuth } from "../AuthenticationProvider";


const DEFAULT_AUTH_DATA = {
    username: "",
    password: "",
};

export default function LoginPage() {
    const [cookies, setCookies, removeCookie] = useCookies();

    const { user, setUser } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        if (location?.state?.is_logout) {
            removeCookie('token');
            removeCookie('reset');
        }
        else {
            if (user) {
                navigate('/');
            }
            else {
                api.get('/auth/validate').then((resp) => {
                    navigate('/');
                }).catch((error) => {
                });
            }
        }
    }, []);

    const onSubmit = (values, { setSubmitting, setErrors }) => {

        let loginUrl = process.env.REACT_APP_BASE_URL + "/auth/login";

        axios.post(loginUrl, values).then((resp) => {
            const { token, reset } = resp.data;
            setCookies('token', token);
            setCookies('reset', reset);

            navigate('/');
        }).catch((error) => {
            setErrors({
                invalid_auth: "Invalid Username or password",
            });
        }).finally(() => {
            setSubmitting(false);
        })

    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-20">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in CABWAD
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Formik
                        initialValues={{ ...DEFAULT_AUTH_DATA }}
                        validate={values => {
                            const errors = {};
                            if (!values.username) {
                                errors.email = 'Username is Required';
                            } else if (!values.password) {
                                errors.email = 'Password is Required';
                            }
                            return errors;
                        }}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            id="username"
                                            name="username"
                                            type="text"
                                            required
                                            className="px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="username" component="div" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                                    </div>
                                    <div className="mt-2">
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                {errors.invalid_auth && <p className="text-red-500 ml-2">{errors.invalid_auth}</p>}
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        disabled={isSubmitting}
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}
