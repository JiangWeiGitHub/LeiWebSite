import { combineReducers } from 'redux'

import BackgroundState from './Background.js'
import FrameState from './Frame.js'

const reducerRoot = combineReducers({
  BackgroundState,
  FrameState
})

export default reducerRoot

