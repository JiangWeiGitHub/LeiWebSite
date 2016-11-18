const defaultState = {
  isShow: false,
  text: ''
}

const snackState = (state = defaultState, atcion) => {
  switch (action.type) {
    case 'SHOW':
      return Object.assign({}, state, {isShow: true, text: action.text})
    case 'HIDE':
      return Object.assign({}, state, {isShow: false, text: action.text})
    default:
      return state
  }
}

export default snackState
