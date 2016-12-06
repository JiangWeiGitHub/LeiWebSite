const DrawerSkinState = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case 'SWITCH_OPEN_SKIN':
      return {isOpen: !state.isOpen}
    default:
      return state
  }
}

export default DrawerSkinState
