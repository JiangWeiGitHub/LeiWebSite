import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import FrameComponent from '../presentation/Frame.js'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return dispatch
}

const Frame = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(FrameComponent)

export default Frame