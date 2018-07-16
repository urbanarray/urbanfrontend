import axios from 'utils/axios';

export const createPlaceApi = (data) => {
    return axios.post('places/create', data);
}