import { combineReducers } from 'redux'

import DrawerSkinState from './DrawerSkin.js'
import FrameState from './Frame.js'
import SkinState from './Skin.js'

const reducerRoot = combineReducers({
  DrawerSkinState,
  FrameState,
  SkinState,
})

export default reducerRoot

