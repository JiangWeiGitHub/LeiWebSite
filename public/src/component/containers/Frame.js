import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import FrameComponent from '../presentation/Frame.js'

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchOpenSkin: () => dispatch(ActionSet.switchOpenSkin())
  }
}

const Frame = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameComponent)

export default Frame
