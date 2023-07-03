import {combineReducers, configureStore} from '@reduxjs/toolkit'
import reducer from './money'

const rootReducer = combineReducers({
  moneyReducer: reducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}