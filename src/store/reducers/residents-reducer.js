import {residentsApi} from '../../api/residents-api';

const SET_RESIDENTS = 'dispex/residentsReducer/SET_RESIDENTS';

const initialState = {
    residents: []
};

export const ResidentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESIDENTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const setResidentsAC = (residents) => ({type: SET_RESIDENTS, payload: {residents}});

export const fetchResidents = (id) => async dispatch => {
    try {
        const response = await residentsApi.fetchResidents(id);

        if (response === '') {
            dispatch(setResidentsAC([]));
        } else {
            dispatch(setResidentsAC(response));
        }
    } catch (err) {
        console.error(err);
    }
};

export const createResident = (name, phone, email, currentAddressID) => async dispatch => {
    try {
        const createResponse = await residentsApi
            .createResidents(name, phone, email);

        await residentsApi
            .bindResidents(currentAddressID, createResponse.id);

        dispatch(fetchResidents(currentAddressID));
    } catch (err) {
        console.error(err);
    }
};

export const deleteResident = (id, currentAddressID) => async dispatch => {
    try {
        await residentsApi.deleteResidents(id);

        dispatch(fetchResidents(currentAddressID));
    } catch (err) {
        console.error(err);
    }
};