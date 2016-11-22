const SkinState = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case 'SHOW_SKIN':
      return {isopen: true}
    case 'HIDE_SKIN':
      return {isopen: false}
    case 'SWITCH_OPEN_SKIN':
      return {isOpen: !state.isOpen}
    default:
      return state
  }
}

export default SkinState

