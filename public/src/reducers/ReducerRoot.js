import { combineReducers } from 'redux'

import DrawerSkinState from './DrawerSkin.js'
import FrameState from './Frame.js'

const reducerRoot = combineReducers({
  DrawerSkinState,
  FrameState
})

export default reducerRoot

