import * as React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/pages/MainLayour";
import AccountsPage from "./components/pages/AccountsPage";
import PDSFormPage from "./components/pages/pds";

const router = createBrowserRouter([

	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "accounts",
				element: <AccountsPage />,
			},
			{
				path: "pds-form",
				element: <PDSFormPage />
			}
		]
	}
]);

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
