import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/app/App';
import {Provider} from 'react-redux';
import store from './store/store';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
