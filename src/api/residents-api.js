import {instance} from './api';

export const residentsApi = {

    fetchResidents(addressId) {
        return instance
            .get(`/HousingStock/clients?addressId=${addressId}`)
            .then(res => res.data)
            .catch(err => err);
    },

    createResidents(name, phone, email) {
        return instance
            .post(`/HousingStock/client`, {
                Id: 0,
                Name: name,
                Phone: phone,
                Email: email,
                BindId: 0
            })
            .then(res => res.data)
            .catch(err => err);
    },

    bindResidents(AddressId,ClientId) {
        return instance
            .put(`/HousingStock/bind_client`,{AddressId, ClientId})
            .then(res => res.data)
            .catch(err => err);
    },

    deleteResidents(id) {
        return instance
            .delete(`/HousingStock/bind_client/`+id)
            .then(res => res.data)
            .catch(err => err);
    },
};