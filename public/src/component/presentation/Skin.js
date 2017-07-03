import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

// import FontIcon from 'material-ui/FontIcon'
// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Wallpaper from 'material-ui/svg-icons/device/wallpaper'

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
          <Wallpaper />
        </IconButton>
      </div>
    )
  }
}

export default Skin
