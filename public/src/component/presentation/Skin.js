import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'

const style = {
  'position': 'absolute',
  'top': 20,
  'right': 40
}

class Skin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { isOpen, switchOpenSkin } = this.props

    return (
      <div>
        <IconButton tooltip="Change Skin" onClick={ switchOpenSkin }>
          <ActionHome />
        </IconButton>
      </div>
    )
  }
}

//Skin.propTypes = {
//  switchOpenSkin: PropTypes.func.isRequired,
//}

export default Skin
