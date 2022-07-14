import { applyMiddleware, createStore } from "redux"
import { MobileReducers } from "./MobileReducer"
import createSagaMiddleware from 'redux-saga'
import { watchUser } from "./Users.saga"

const sagaMiddleware= createSagaMiddleware()

export const Store=createStore(MobileReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchUser)