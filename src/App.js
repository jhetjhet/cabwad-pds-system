import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/pages/MainLayour";
import AccountsPage from "./components/pages/AccountsPage";
import PDSFormPage from "./components/pages/pds";
import LoginPage from './components/pages/LoginPage';
import { AuthenticationProvider } from './components/AuthenticationProvider';
import PrivatePage from './components/PrivatePage';
import { Bounce, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import EmployeePage from "./components/pages/EmployeePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import EmployeeAccountPage from "./components/pages/EmployeeAccountPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<PrivatePage>
				<MainLayout />
			</PrivatePage>
		),
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "",
				element: <PDSFormPage />
			},
			{
				path: "pds-form",
				element: <PDSFormPage />
			},
			{
				path: "pds-form/:pdsId",
				element: <PDSFormPage />
			},
			{
				path: "user-pds-form/:userId",
				element: <PDSFormPage />
			},
			{
				path: "accounts",
				element: <AccountsPage />,
			},
			{
				path: "employees",
				element: <EmployeePage />,
			},
		]
	},
	{
		path: "/login",
		element: <LoginPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/acc/employee",
		element: <EmployeeAccountPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/acc/employee/:pdsId",
		element: (
			<PrivatePage>
				<EmployeeAccountPage />
			</PrivatePage>
		),
		errorElement: <NotFoundPage />,
	},
]);

function App() {
	return (
		<>
			<ToastContainer />
			<AuthenticationProvider>
				<RouterProvider router={router} />
			</AuthenticationProvider>
		</>
	);
}

export default App;
