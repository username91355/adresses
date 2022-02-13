import {addressAPI} from '../../api/address-api';

const SET_STREETS = 'dispex/addressReducer/SET_STREETS';
const SET_HOUSES = 'dispex/addressReducer/SET_HOUSES';
const SET_FLATS = 'dispex/addressReducer/SET_FLATS';
const SET_CURRENT_ADDRESS = 'dispex/addressReducer/SET_CURRENT_ADDRESS';

const initialState = {
    streets: [],
    houses: [],
    flats: [],
    currentAddressID: null
};

export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STREETS:
        case SET_HOUSES:
        case SET_FLATS:
            return {
                ...state,
                ...action.payload
            }
        case SET_CURRENT_ADDRESS:
            return {
                ...state,
                currentAddressID: action.currentAddressID
            }
        default:
            return state;
    }
};

const setStreetsAC = (streets) => ({type: SET_STREETS, payload: {streets}});
const setHousesAC = (houses) => ({type: SET_HOUSES, payload: {houses}});
const setFlatsAC = (flats) => ({type: SET_FLATS, payload: {flats}});
export const setCurrentAddressIDAC = (currentAddressID) => ({type: SET_CURRENT_ADDRESS, currentAddressID});

export const fetchStreets = () => async dispatch => {
    try {
        const response = await addressAPI.fetchStreets();

        dispatch(setStreetsAC(response));
    } catch (err) {
        console.error(err);
    }
};

export const fetchHouses = (id) => async dispatch => {
    try {
        const response = await addressAPI.fetchHouses(id);

        dispatch(setHousesAC(response));
    } catch (err) {
        console.error(err);
    }
};

export const fetchFlats = (id) => async dispatch => {
    try {
        const response = await addressAPI.fetchFlats(id);

        dispatch(setFlatsAC(response));
    } catch (err) {
        console.error(err);
    }
};