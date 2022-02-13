import React from 'react';
import s from '../app/App.module.css';
import {Selector} from '../selector/Selector';
import {fetchFlats, fetchHouses, setCurrentAddressIDAC,} from '../../store/reducers/search-reducer';
import {fetchResidents, setResidentsAC} from '../../store/reducers/residents-reducer';
import {useDispatch, useSelector} from 'react-redux';

export const Search = () => {

    const
        dispatch = useDispatch(),
        streets = useSelector((state => state.search.streets)),
        houses = useSelector((state => state.search.houses)),
        flats = useSelector((state => state.search.flats));

    const streetSelectHandler = (e) => {
        dispatch(setCurrentAddressIDAC(null));
        dispatch(setResidentsAC([]))
        dispatch(fetchHouses(e));
    };

    const housesSelectHandler = (e) => {
        dispatch(setCurrentAddressIDAC(null));
        dispatch(setResidentsAC([]))
        dispatch(fetchFlats(e));
    };

    const flatSelectHandler = (e) => {
        dispatch(setCurrentAddressIDAC(e));
        dispatch(fetchResidents(e));
    };

    return (
        <div className={s.app__search}>
            <h3>Address</h3>
            <Selector
                placeholder={'Select street'}
                onSelect={streetSelectHandler}
                list={streets.filter(i => i.cityId === 1)}
            />
            <Selector
                placeholder={'Select house'}
                onSelect={housesSelectHandler}
                list={houses}
            />
            <Selector
                placeholder={'Select flat'}
                onSelect={flatSelectHandler}
                list={flats}
            />
        </div>
    );
};