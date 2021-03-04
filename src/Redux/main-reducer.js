//import axios from 'axios'
//import data from "../Data.json"
import React from 'react';
import {Stocks} from "./Stocks";

export const Ap = () => {
    return (
        <Stocks/>
    )
}

let initialState = {}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

