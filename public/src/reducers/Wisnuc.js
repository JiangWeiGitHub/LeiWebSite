const defaultState = {
  number: 0,
  machieLeftIcon: false,
  machineRightIcon: false,
  userLeftIcon: false,
  userRightIcon: false,

  isOpen: false,
}

const WisnucState = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_OPEN_SKIN':
      return Object.assign({}, state, { isOpen: !state.isOpen })
    case 'EMPTY_MACHINES':
      return Object.assign({}, state, {
        number: 0,
        machieLeftIcon: false,
        machineRightIcon: false,
        userLeftIcon: false,
        userRightIcon: false,
      }) 
    case 'FIRST_MACHINES':
      return Object.assign({}, state, {
        number: state.number,
        machieLeftIcon: false,
        machineRightIcon: false
      }) 
    case 'MORE_MACHINES':
      return Object.assign({}, state, { machineRightIcon: !state.isOpen })      
    default:
      return state
  }
}

export default WisnucState