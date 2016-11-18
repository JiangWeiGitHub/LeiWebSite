import { combineReducers } from 'redux'
import loginState from './loginState.js'
import snackState from './snackState.js'

const reducerRoot = combineReducers({
  loginState,
  snackState
})

export default reducerRoot

