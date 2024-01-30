// import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, createStore, compose } from 'redux'

// 各個 reducer
import controlReducer from '../reducer/control'

// redux enhancer
import { applyMiddleware } from 'redux-subspace'
import thunk from 'redux-thunk'
import dynostore, { dynamicReducers } from '@redux-dynostore/core'

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
const persistConfig = {
    key: 'controlReducer',
    storage: storageSession,
    whitelist: ['userData', 'isLogin'],
}
const persistedControlReducer = persistReducer(persistConfig, controlReducer)

const rootReducer = combineReducers({
    persistedControlReducer,
})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), dynostore(dynamicReducers()))
)

export const persistor = persistStore(store)
export default store
