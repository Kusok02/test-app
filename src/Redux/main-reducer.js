//import axios from 'axios'
import data from "../123.json"

let initialState = {
    data:data
}

export const MainReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
