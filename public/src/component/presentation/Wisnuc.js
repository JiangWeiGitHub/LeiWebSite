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

import Skin from './Skin.js'
import { getUserName } from '../../webSocket/getUserName'

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

let colorArray = [
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
]

let randomColor = () => {
  return colorArray[Math.round(Math.random()*16)]
}

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
  'top': '77%',
  'height': '15%',
  'display': 'flex',
  'justify-content': 'center',
  'align-content': 'center',
  'align-items': 'flex-start',
}

const user = {
  'height': '100%',
  'width': '10%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userIcon = {
  'height': '60%',
  'align-items': 'center',
  'display': 'flex',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userName = {
  'height': '40%',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',
}

const userButton = {
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-content': 'center',

  'padding': '0',
  'margin': '0',
}

class Wisnuc extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      leftMachineButton: false,
      rightMachineButton: false,
      id: 0,
    }
  }

  getMachineInfor () {
    return [
      {
        name: 'Testing Machine No. 110',
        ip: '192.168.5.100',
        users: [
          'Jerry',
          'Tom',
          'John',
          'Grace',
          'Emma',
          'Lucy',
          'Lily',
          'Jan',
          'Kate',
        ],
      },
      // {
      //   name: 'Testing Machine No. 111',
      //   ip: '192.168.5.110',
      //   users: [
      //     'Adam',
      //     'Bob',
      //     'Cody',
      //   ],
      // },      
    ]
  }

  getStateAll () {
    if(this.getMachineInfor().length < 1 || this.getMachineInfor().length === 1) {
      this.state.leftMachineButton = false
      this.state.rightMachineButton = false
    }
    else if(this.getMachineInfor().length > 1) {
      this.state.leftMachineButton = true
      this.state.rightMachineButton = true
    }
  }

  idjian () {
    this.state.id = this.state.id--
  }

  idjia () {
    this.state.id = this.state.id++
  }


  machineInfor () {
    if( this.state.leftMachineButton === false && this.state.rightMachineButton === false ) {
      return (
        <div style={thirdLine}>
          <div style={preIcon}></div>
          <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
          <div style={nextIcon}></div>
        </div>
      )   
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === false ) {
      return (
        <div style={thirdLine}>
          <div style={preIcon}><IconButton onClick={this.idjian()}><PreIcon color={grey700} /></IconButton></div>
          <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
          <div style={nextIcon}></div>
        </div>        
      )
    }
    else if( this.state.leftMachineButton === true && this.state.rightMachineButton === true ) {
      return (
        <div style={thirdLine}>
          <div style={preIcon}><IconButton onClick={this.idjian()}><PreIcon color={grey700} /></IconButton></div>
          <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
          <div style={nextIcon}><IconButton  onClick={this.idjia()}><NextIcon color={grey700} /></IconButton></div>
        </div>        
      )
    }
    else if( this.state.leftMachineButton === false && this.state.rightMachineButton === true ) {
      return (
        <div style={thirdLine}>
          <div style={preIcon}></div>
          <div style={middlePic}><img src="/images/wisnuc/machine.png" width="74" height="74" /></div>
          <div style={nextIcon}><IconButton  onClick={this.idjia()}><NextIcon color={grey700} /></IconButton></div>
        </div>        
      )
    }
  }

  render() {
    {this.getStateAll()}
    return (
      <div style={wholeWisnuc}>
        <div style={firstLine}>
          <div style={wisnucLogo}><img src="/images/wisnuc/logo.png" width="114" height="28" /></div>
          <div style={login}>Login</div>
          <div style={skin}><Skin isOpen={this.props.isOpen} switchOpenSkin={this.props.switchOpenSkin} /></div>
        </div>
        <div style={secondLine}><span style={diff}>Welcome to use </span>WISNUC</div>
          {this.machineInfor()}
        <div style={fourthLine}>{this.getMachineInfor()[this.state.id].name}</div>
        <div style={fifthLine}>{this.getMachineInfor()[this.state.id].ip}</div>
        <div style={sixthLine}>
          <div style={preIcon}><IconButton><PreIcon color={grey700} /></IconButton></div>
          <div style={user}>
            <div style={userIcon}>
              <IconButton style={userButton}>
                <Avatar
                  color={grey50}
                  backgroundColor={randomColor()}
                  size={40}
                >
                  A
                </Avatar>
              </IconButton>
            </div>
            <div style={userName}>Alice</div>
          </div>
          <div style={user}>
            <div style={userIcon}>
              <IconButton style={userButton}>
                <Avatar
                  color={grey50}
                  backgroundColor={randomColor()}
                  size={40}
                >
                  M
                </Avatar>
              </IconButton>
            </div>
            <div style={userName}>Mike</div>
          </div>
          <div style={user}>
            <div style={userIcon}>
              <IconButton style={userButton}>
                <Avatar
                  color={grey50}
                  backgroundColor={randomColor()}
                  size={40}
                >
                  T
                </Avatar>
              </IconButton>
            </div>
            <div style={userName}>Tom</div>
          </div>
          <div style={user}>
            <div style={userIcon}>
              <IconButton style={userButton}>
                <Avatar
                  color={grey50}
                  backgroundColor={randomColor()}
                  size={40}
                >
                  S
                </Avatar>
              </IconButton>
            </div>
            <div style={userName}>Sean</div>
          </div>
          <div style={user}>
            <div style={userIcon}>
              <IconButton style={userButton}>
                <Avatar
                  color={grey50}
                  backgroundColor={randomColor()}
                  size={40}
                >
                  C
                </Avatar>
              </IconButton>
            </div>
            <div style={userName}>Cody</div>
          </div>
          <div style={nextIcon}><IconButton><NextIcon color={grey700} /></IconButton></div>
        </div>
      </div>
    )
  }
}

export default Wisnuc
