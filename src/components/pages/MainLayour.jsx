
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useAuth } from "../AuthenticationProvider";
import { useState } from "react";
import CFooter from "./CFooter";


export default function MainLayout() {
    const { user, setUser } = useAuth();
    const [openUserMenu, setOpenUserMenu] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        setUser(null);
        navigate('/login', {
            state: {
                is_logout: true,
            }
        });
    }

    return (
        <div className="flex">
            <Sidebar />

            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">

                <header className="w-full items-center bg-blue-500 py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    <div className="relative w-1/2 flex justify-end">
                        <button
                            className="text-white bg-yellow-500 text-lg font-extrabold px-3 realtive z-10 rounded-md overflow-hidden border-4 border-blue-800 hover:border-blue-700 focus:border-blue-600 focus:outline-none"
                            onClick={() => setOpenUserMenu(true)}
                        >
                            {/* <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" /> */}
                            Hi {user?.username}
                        </button>
                        {openUserMenu && (
                            <>
                                <button x-show="isOpen" className="h-full w-full fixed inset-0 cursor-default"
                                    onClick={() => setOpenUserMenu(false)}
                                ></button>
                                <div x-show="isOpen" className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                                    <button href="#" className="block px-4 py-2 account-link hover:text-gray-300"
                                        onClick={() => logout()}
                                    >Sign Out</button>
                                </div>
                            </>
                        )}
                    </div>
                </header>

                <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6 mb-6">
                        <Outlet />
                    </main>
                    <CFooter />
                </div>
            </div >
        </div>
    );
}
