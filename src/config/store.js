import {createStore, applyMiddleware} from "redux"
import rootReducer from "config/reducer"
import {logger} from "config/middleware"

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
