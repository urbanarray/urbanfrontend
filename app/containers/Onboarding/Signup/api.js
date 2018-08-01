import axios from 'utils/axios';

export const socialSignupApi = (data) => {
    return axios.post('auth/socialSignup', data);
}

export const linkedinSignupApi = (data) => {
    return axios.post('auth/linkedinSignup', data);
}

export const signupApi = (data) => {
    return axios.post('auth/register', data);
}
