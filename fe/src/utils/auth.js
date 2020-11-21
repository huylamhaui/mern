import api from './api';

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token)
        return false;
    return checkToken(token);
}

export function checkToken(token) {
    return true;
}