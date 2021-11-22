import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";


const rootReducer = combineReducers({
    count: counterReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>
