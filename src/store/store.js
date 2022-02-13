import {applyMiddleware, combineReducers, createStore} from 'redux';
import {SearchReducer} from './reducers/search-reducer';
import thunk from 'redux-thunk';
import {ResidentsReducer} from './reducers/residents-reducer';

const rootReducer = combineReducers({
    search: SearchReducer,
    residents: ResidentsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;