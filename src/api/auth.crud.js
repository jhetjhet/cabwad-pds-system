import api from "./base";

export function listUsers(params) {
    return api.get('/api/user', {
        params: params,
    });
}

export function createUser(data) {
    return api.post('/auth/register', data);
}

export function updateUser(userId, data) {
    return api.put(`/api/user/${userId}`, data);
}

export function deleteUser(userId) {
    return api.delete(`/api/user/${userId}`);
}

