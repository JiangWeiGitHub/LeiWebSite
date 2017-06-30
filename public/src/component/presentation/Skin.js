import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FontIcon from 'material-ui/FontIcon'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

class Skin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { switchOpenSkin } = this.props

    // console.log('>>>>>>>>>>>>>')
    // console.log(switchOpenSkin)
    // console.log('<<<<<<<<<<<<<')

    return (
      <div>
        <IconButton onClick={ switchOpenSkin }>
          <Menu />
        </IconButton>
      </div>
    )
  }
}

export default Skin
