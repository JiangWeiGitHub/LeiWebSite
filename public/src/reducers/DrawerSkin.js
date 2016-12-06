const setBackgroundPic = (state) => {

}

const DrawerSkinState = (state = { isOpen: false, bgPath: '/images/backgrounds/bg_img001.jpg' }, action) => {
  switch (action.type) {
    case 'SWITCH_OPEN_SKIN':
      // return {isOpen: !state.isOpen}
      return Object.assign({}, state, { isOpen: !state.isOpen })
    case 'SKIN_CHECKED':
      return Object.assign({}, state, { bgPath: action.bgPath })
    default:
      return state
  }
}

export default DrawerSkinState
