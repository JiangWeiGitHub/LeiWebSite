const defaultState = {
  state: 'READY' //READY, BUSY, REJECTED, TIMEOUT, ERROR, LOGGEDIN
}

const loginState = (state = defaultState, atcion) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {state: 'BUSY'})
    case 'LOGGED':
      return Object.assign({}, state, {state: 'LOGGED'})
    case 'LOGOUT':
      return Object.assign({}, state, {state: 'LOGOUT'})
    default:
      return state
  }
}

export default loginState
