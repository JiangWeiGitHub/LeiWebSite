const defaultState = {
  isShow: false,
  text: ''
}

const snackState = (state = defaultState, atcion) => {
  switch (action.type) {
    case 'SHOW_SNACK':
      return Object.assign({}, state, {isShow: true, text: action.text})
    case 'HIDE_SNACK':
      return Object.assign({}, state, {isShow: false})
    default:
      return state
  }
}

export default snackState
