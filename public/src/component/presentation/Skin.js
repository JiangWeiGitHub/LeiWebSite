import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuButton from 'material-ui/svg-icons/navigation/menu'

class Skin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { isOpen, switchOpenSkin } = this.props

    return (
      <div>
      <IconButton>
        <MenuButton onClick={ switchOpenSkin } />
        {console.log(this)}
      </IconButton>
      </div>
    )
  }
}

export default Skin
