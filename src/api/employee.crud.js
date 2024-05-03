import api from "./base";


export function listsEmployee(params) {
    return api.get('/api/employee/pds', {params});
}

export function createPDS(data) {
    return api.post('/api/employee/pds/', data);
}

export function deletePDS(pdsId) {
    return api.delete(`/api/employee/pds/${pdsId}`);
}

export function updatePDS(pdsId, data) {
    return api.put(`/api/employee/pds/${pdsId}`, data);
}

export function getPDS(pdsId) {
    return api.get(`/api/employee/pds/${pdsId}`);
}