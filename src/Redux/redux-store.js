import {createStore} from "redux"
import {MainReducer} from "./main-reducer";

let MainPage = MainReducer

let store = createStore(MainPage);

//window.store = store

export default store;