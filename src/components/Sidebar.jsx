import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
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
				<CustomNavLink to={"pds-form"}>
					<PeopleOutlineOutlinedIcon className="mr-1" />
					PDS Form
				</CustomNavLink>

				<CustomNavLink to={"accounts"}>
					<AdminPanelSettingsOutlinedIcon className="mr-1" />
					Accounts
				</CustomNavLink>

				<CustomNavLink to={"employees"}>
					<BadgeOutlinedIcon className="mr-1" />
					Employees
				</CustomNavLink>
			</nav>
		</aside>
	);
}