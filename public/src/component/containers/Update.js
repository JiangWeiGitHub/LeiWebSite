import { connect } from 'react-redux'

import ActionSet from '../../actions/actionSet.js'
import UpdateComponent from '../presentation/Update.js'

// const mapStateToProps = (state) => {

//   return {
//     isOpen: state.DrawerSkinState.isOpen,
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return {
//     switchOpenSkin: () => dispatch(ActionSet.switchOpenSkin())
//   }
// }

const Update = connect(

  // mapStateToProps,
  () => {},
  // mapDispatchToProps
  ()=>{}
)(UpdateComponent)

export default Update
