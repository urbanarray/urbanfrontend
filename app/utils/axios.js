import axios from 'axios';
import history from '../history';
import {accessToken, clearState} from './persistState';

const onlineServer ='http://mvp.urbanarray.org:3000/v1';
const local = 'http://localhost:3000/v1/';

const api = axios.create({
    
    baseURL: onlineServer,
    timeout: 20000,
});

if (accessToken) {
    api.defaults.headers.common['Authorization'] = accessToken();
}

api.interceptors.response.use((response) =>{
    return response;
}, (error)=> {
    if (error.response.status === 401) {
        clearState();
        history.push('/login');
    }
    
    throw error;
});

/**
 * A helper function to set token after the user in logged in.
 */

 export const setToken = (token) => {
  api.defaults.headers.common['Authorization'] = "Bearer "+ token;
 }

 export default api;