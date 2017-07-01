import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { deepOrange500 } from 'material-ui/styles/colors'

import Drawer from 'material-ui/Drawer'
import { GridList, GridTile } from 'material-ui/GridList'

import Toggle from 'material-ui/Toggle'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  toggle: {
    marginRight: 10,
  },
}

class DrawerSkin extends React.Component {
  constructor(props) {
    super(props)
    // this.bg = '/images/backgrounds/bg_img001.jpg'
    this.changeBackground = this.changeBackground.bind(this)

    this.tilesData = [
      {
        img: '/images/backgrounds/bg_img001.jpg',
        title: 'Default',
        isChecked: true,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img001.jpg')
      },
      {
        img: '/images/backgrounds/bg_img01.jpg',
        title: 'Blue Sea',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img01.jpg')
      },
      {
        img: '/images/backgrounds/bg_img02.jpg',
        title: 'Yellow Leaf',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img02.jpg')
      },
      {
        img: '/images/backgrounds/bg_img03.jpg',
        title: 'Purple Sky',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img03.jpg')
      },
      {
        img: '/images/backgrounds/bg_img04.jpg',
        title: 'Colorful Bubble',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img04.jpg')
      },
      {
        img: '/images/backgrounds/bg_img05.jpg',
        title: 'Ice River',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img05.jpg')
      },

      {
        img: '/images/backgrounds/bg_img06.jpg',
        title: 'Geometric Figure',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img06.jpg')
      },
      {
        img: '/images/backgrounds/bg_img07.jpg',
        title: 'Ice Ocean',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img07.jpg')
      },
      {
        img: '/images/backgrounds/bg_img08.jpg',
        title: 'Green Nature',
        isChecked: false,
        changeBackground: this.changeBackground('/images/backgrounds/bg_img08.jpg')
      },
    ]

  }

  changeBackground(bg) {

    console.log(bg)

    // let number = Math.floor(Math.random() * 9) + 1

    // document.body.style.backgroundImage = `url('/images/backgrounds/bg_img0${number}.jpg')`
    document.body.style.backgroundImage = `url(${bg})`
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundPosition = "left top"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundSize = "cover"
  } 

  render() {

    const { isOpen, bgPath } = this.props

    // console.log('>>>>>>>>>>>>>>')
    // console.log('DrawSkin')
    // console.log(isOpen)
    // console.log(bgPath)
    // console.log('<<<<<<<<<<<<<<')

    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <Drawer width={250} openSecondary={true} open={isOpen} >
            <div style={styles.root}>
              <GridList
                cols={1}
                cellHeight={150}
                padding={1}
                style={styles.gridList}
              >
                {this.tilesData.map((tile) => (
                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={
                      <Toggle
                        style={styles.toggle}
                        defaultToggled={ bgPath === tile.img ? true : false }
                        onClick={ () => { this.changeBackground(tile.img)} }
                      />
                    }
                    actionPosition="left"
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0) 100%)"
                  >
                    <img src={tile.img} />
                  </GridTile>
                ))}
              </GridList>
            </div>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default DrawerSkin
