import {createStore} from "redux"
import {MainReducer} from "./main-reducer";

let MainPage = MainReducer

let state = createStore(MainPage);

export default state;