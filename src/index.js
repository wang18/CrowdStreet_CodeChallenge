import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/index';
import ReduxPromise from "redux-promise";

const appStore = createStore(
    RootReducer,
    applyMiddleware(ReduxPromise)
);

ReactDOM.render(<Provider store={appStore}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
