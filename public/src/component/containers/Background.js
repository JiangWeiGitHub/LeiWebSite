import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import BackgroudComponent from '../presentation/Background.js'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

const Backgroud = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(BackgroudComponent)

export default Backgroud