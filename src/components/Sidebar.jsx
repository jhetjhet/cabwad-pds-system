import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { Link, NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({isActive, isPending, isTransitioning}) => [
				isActive ? "bg-blue-50" : "bg-blue-500",
			].join(" ") + " mx-2 rounded-md flex items-center py-4 pl-6 mb-1 hover:bg-blue-100"}
		>
			{children}
		</NavLink>
	);
}

export default function Sidebar() {

	return (
		<aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl bg-blue-500">
			<div className="p-5">
				<Link to={"/"}>
					<img src="https://cabuyaowaterdistrict.gov.ph/wp-content/uploads/2022/08/Cabuyao-Water-District-300-%C3%97-100-px.png" />
				</Link>
			</div>
			<nav className="text-lg font-semibold pt-3">
				{/* <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-tachometer-alt mr-3"></i>
					Accounts
				</a>
				<a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
					<i className="fas fa-sticky-note mr-3"></i>
					Employees
				</a> */}

				<CustomNavLink to={"pds-form"}>
					<PeopleOutlineOutlinedIcon className="mr-1" />
					PDS
				</CustomNavLink>

				<CustomNavLink to={"accounts"}>
					<AdminPanelSettingsOutlinedIcon className="mr-1" />
					Accounts
				</CustomNavLink>
			</nav>
			{/* <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
					<i className="fas fa-arrow-circle-up mr-3"></i>
					Upgrade to Pro!
				</a> */}
		</aside>
	);
}