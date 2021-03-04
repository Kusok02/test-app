import {createStore} from "redux"
import {MainReducer} from "./main-reducer";

let MainPage = MainReducer

let store = createStore(MainPage);

export default store;