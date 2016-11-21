import { combineReducers } from 'redux'

import BackgroundState from './Background.js'
import SkinState from './Frame.js'

const reducerRoot = combineReducers({
  BackgroundState,
  SkinState
})

export default reducerRoot

