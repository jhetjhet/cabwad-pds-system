import { useEffect, useState } from "react";
import { CSearchBar, createToast } from "../forms";
import ReactPaginate from "react-paginate";
import { listsEmployee } from "../../api/employee.crud";
import { useNavigate } from "react-router-dom";



export default function EmployeePage() {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [targetUser, setTargetUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        initEmployees();
    }, []);

    const initEmployees = (page = 0, search) => {
        page++;

        const params = { page };

        if (search) {
            params.search = search;
        }

        listsEmployee(params).then((resp) => {
            const data = resp.data;

            setPageCount(data.totalPages);
            setEmployees(data.data);
        });
    }

    const onSearch = (value) => {
        initEmployees(page, value);
    }

    const onEmployeeDelete = (id, name) => {
        console.log(id, name);
        createToast('success', `User "${name}" is deleted successfuly!`);
        // deleteUser(id).then((() => {
        // })).catch(() => {
        //     createToast('error', "Something went wrong.");
        // }).finally(() => {
        //     initUsersList(page);
        // });
    }

    const handlePageClick = (e) => {
        setPage(e.selected);
        // initUsersList(e.selected);
    }

    return (
        <div className="text-gray-900 bg-gray-200 min-h-[32rem] flex flex-col">

            <div className="p-4 flex">
                <h1 className="text-3xl">
                    Employees
                </h1>
            </div>
            <div className="flex items-center content-center w-100 px-8">
                <div className="">
                    <CSearchBar onSearch={onSearch} />
                </div>
                <button type="button" className="ml-3 text-md bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        navigate('/pds-form', { state: {add_mode: true} });
                    }}
                >
                    create
                </button>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Name</th>
                            <th className="text-left p-3 px-5">Gender</th>
                            <th className="text-left p-3 px-5">Age</th>
                            <th className="text-left p-3 px-5">Barangay</th>
                            <th></th>
                        </tr>
                        {employees.map((employee) => (
                            <tr className="border-b hover:bg-orange-100 even:bg-gray-100 odd:bg-white" key={employee._id}>
                                <td className="p-3 px-5">
                                    <span>{[employee.personal_information.name.firstname, employee.personal_information.name.middlename, employee.personal_information.name.lastname].join(' ')}</span>
                                </td>
                                <td className="p-3 px-5">
                                    {employee?.personal_information?.gender || 'not set'}
                                </td>
                                <td className="p-3 px-5">
                                    {employee?.personal_information?.age || 'not set'}
                                </td>
                                <td className="p-3 px-5">
                                    {employee?.permanent_address?.barangay || 'not set'}
                                </td>
                                <td className="p-3 px-5 flex justify-end">
                                    <button type="button" className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => {
                                            // setTargetUser(employee);
                                        }}
                                    >
                                        PDS
                                    </button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => onEmployeeDelete(employee._id, employee?.personal_information?.name?.firstname)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {employees.length === 0 && (
                            <tr className="border-b hover:bg-orange-100 even:bg-gray-100 odd:bg-white">
                                <td className="p-3 px-5 col-auto" colSpan={100}>
                                    <span>No Employees found.</span>
                                </td>
                            </tr>
                        )}
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
