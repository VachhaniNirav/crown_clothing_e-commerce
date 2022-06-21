import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'
import createSagaMiddleware, { runSaga } from "@redux-saga/core";

import { rootsaga } from "./root-saga/root-saga";
import { rootReducer } from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(Boolean)

const composeEnhancer = (
    process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootsaga)

export const persistor = persistStore(store)