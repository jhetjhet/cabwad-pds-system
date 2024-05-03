import api from "./base";


export function listsEmployee(params) {
    return api.get('/api/employee/pds', {params});
}