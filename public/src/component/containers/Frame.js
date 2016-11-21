import { connect } from 'react-redux'

import switchOpenSkinaaa from '../../actions/actionSet.js'
import FrameComponent from '../presentation/Frame.js'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isOpen: state.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchOpenSkin: () => dispatch(switchOpenSkinaaa)
  }
}

const Frame = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrameComponent)

export default Frame
