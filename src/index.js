import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from "react-redux"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
