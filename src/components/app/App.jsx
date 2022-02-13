import s from './App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchStreets} from '../../store/reducers/search-reducer';
import {AddResidentModal} from '../add-resident-modal/AddResidentModal';
import {Search} from '../search/Search';
import {Residents} from '../residents/Residents';

export const App = () => {

    const
        dispatch = useDispatch(),
        currentAddressID = useSelector((state => state.search.currentAddressID));

    const [creationMode, setCreationMode] = useState(false);

    useEffect(() => {
        dispatch(fetchStreets());
    }, [dispatch]);


    const setCreationModeHandler = () => {
        setCreationMode(!creationMode);
    };

    return (
        <div className={s.app}>
            <header className={s.app__header}>
                <h3>Dispex</h3>
            </header>
            {
                creationMode && <AddResidentModal
                    currentAddressID={currentAddressID}
                    setCreationModeHandler={setCreationModeHandler}
                />
            }
            <Search/>
            <Residents
                currentAddressID={currentAddressID}
                setCreationModeHandler={setCreationModeHandler}
            />
        </div>
    );
};
