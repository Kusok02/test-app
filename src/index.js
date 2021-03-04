import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from "react-redux"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={state}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
