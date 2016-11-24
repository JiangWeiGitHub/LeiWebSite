import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import ActionBook from 'material-ui/svg-icons/action/book'
import Avatar from 'material-ui/Avatar'
import ListItem from 'material-ui/List/ListItem'

import PreIcon from 'material-ui/svg-icons/navigation/chevron-left'
import NextIcon from 'material-ui/svg-icons/navigation/chevron-right'

import {
  yellow200,
  amber200,
  orange200,
  deepOrange200,
  red200,
  pink200,
  purple200,
  deepPurple200,
  indigo200,
  blue200,
  lightBlue200,
  cyan200,
  teal200,
  green200,
  lightGreen200,
  lime200,
  grey50,
  grey700,
} from 'material-ui/styles/colors'

import Skin from './Skin.js'

const wholeWisnuc = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '100%',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
}

const firstLine = {
  'position': 'absolute',
  'top': '0',
  'left': '0',
  'width': '100%',
  'height': '20%',
}

const wisnucLogo = {
  'position': 'absolute',
  'left': '40',
  'width': '20%',
  'height': '100%',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
}

const login = {
  'position': 'absolute',
  'left': '170',
  'width': '10%',
  'height': '100%',
  'top': '42',
  'font-size': '21px',
  'color': '#616161',
}

const skin = {
  'position': 'absolute',
  'width': '10%',
  'height': '100%',
  'top': '30',
  'right': '40',
//'background-color': "#00ff00",
}

const secondLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '20%',
  'height': '10%',
  'text-align': 'middle',
  'font-size': '26px',
  'font-weight': 'bolder',
  'text-shadow': '#E0E0E0 0 1px 0',
}

const diff = {
  'font-weight': 'lighter',
  'color': '#616161',
}

const thirdLine = { 
  'position': 'absolute',
  'width': '100%',
  'top':'30%',
  'height': '30%',
  'text-align': 'middle',

  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
}

const preIcon = {
  'width': '35%',
  'left': '0',
  'text-align': 'right',
}

const nextIcon = {
  'width': '35%',
  'left': '65%',
  'text-align': 'left',
}

const middlePic = {
  'width': '30%',
  'left': '35%',
}

const fourthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '60%',
  'height': '8%',

  'font-size': '17px',
  'font-weight': 'bolder',
}

const fifthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '67%',
  'height': '10%',
}

const sixthLine = {
  'position': 'absolute',
  'width': '100%',
  'top': '75%',
  'height': '25%',
  'display': 'flex',
  'justify-content': 'center',
}

const user = {
'background-color':'#987943',
}

class Wisnuc extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div style={wholeWisnuc}>
        <div style={firstLine}>
          <div style={wisnucLogo}><img src="/images/wisnuc/logo.png" width="114" height="28" /></div>
          <div style={login}>Login</div>
          <div style={skin}><Skin isOpen={this.props.isOpen} switchOpenSkin={this.props.switchOpenSkin} /></div>
        </div>
        <div style={secondLine}><span style={diff}>Welcome to use </span>WISNUC</div>
        <div style={thirdLine}>
          <div style={preIcon}><IconButton><PreIcon color={grey700} /></IconButton></div>
          <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
          <div style={nextIcon}><IconButton><NextIcon color={grey700} /></IconButton></div>
        </div>
        <div style={fourthLine}>Testing Machine No. 110</div>
        <div style={fifthLine}>192.168.1.110</div>
        <div style={sixthLine}>
          <div style={user}>
            <div>
              <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar
                    color={grey50}
                    backgroundColor={blue200}
                    size={50}
                  >
                    A
                  </Avatar>
                }
              >
              </ListItem>
            </div>
            <div>Alice</div>
          </div>
          <div style={user}>
            <div>
              <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar
                    color={grey50}
                    backgroundColor={purple200}
                    size={50}
                  >
                    M
                  </Avatar>
                }
              >
              </ListItem>
            </div>
            <div>Mike</div>
          </div>
          <div style={user}>
            <div>
              <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar
                    color={grey50}
                    backgroundColor={lime200}
                    size={50}
                  >
                    T
                  </Avatar>
                }
              >
              </ListItem>
            </div>
            <div>Tom</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wisnuc
