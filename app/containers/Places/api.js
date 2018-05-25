import axios from "utils/axios";

export const listPlacesApi = () => {
    
    return axios.get('places/index');

}

export const deletePlaceApi = (id) => {
    return axios.delete('places/delete/' + id);
}

export const updatePlacesApi = (id) => {
    return axios.patch('places/update/' + id);
}