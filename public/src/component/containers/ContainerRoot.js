import React from 'react'

import Backgroud from './Background.js'
import Frame from './Frame.js'
import DrawerSkin from './DrawerSkin.js'

const background = {
  'display': 'flex',
  'justify-content': 'center',
  'align-items':'center',
  'background': 'url(../images/backgrounds/bg_img001.jpg) no-repeat 0px 0',
  'background-size': 'cover',
  'width': '100%',
  'height': '100%'
}

const ContainerRoot = () => (
  <div style={background}>
//    <Backgroud />
    <Frame />
    <DrawerSkin />
  </div>
)

export default ContainerRoot
