import {instance} from './api';

export const addressAPI = {

    fetchStreets() {
        return instance
            .get('/Request/streets')
            .then(res => res.data)
            .catch(err => err);
    },

    fetchHouses(id) {
        return instance
            .get(`/Request/houses/${id}`)
            .then(res => res.data)
            .catch(err => err);
    },

    fetchFlats(id) {
        return instance
            .get(`/Request/house_flats/${id}`)
            .then(res => res.data)
            .catch(err => err);
    },
};