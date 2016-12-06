import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {deepOrange500} from 'material-ui/styles/colors'

import Drawer from 'material-ui/Drawer'
import {GridList, GridTile} from 'material-ui/GridList'
//import IconButton from 'material-ui/IconButton'
//import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'


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
}

const tilesData = [
  {
    img: '/images/backgrounds/bg_img001.jpg',
    title: 'Default',
    isChecked: true,
  },
  {
    img: '/images/backgrounds/bg_img01.jpg',
    title: 'Blue Sea',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img02.jpg',
    title: 'Yellow Leaf',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img03.jpg',
    title: 'Purple Sky',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img04.jpg',
    title: 'Colorful Bubble',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img05.jpg',
    title: 'Ice River',
    isChecked: false,
  },

  {
    img: '/images/backgrounds/bg_img06.jpg',
    title: 'Geometric Figure',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img07.jpg',
    title: 'Ice Ocean',
    isChecked: false,
  },
  {
    img: '/images/backgrounds/bg_img08.jpg',
    title: 'Green Nature',
    isChecked: false,
  },
]

class DrawerSkin extends React.Component {
  constructor(props) {
    super(props)
  }

  dealTilesData () {
    let tmp = tilesData.concat()
    return tmp
  }  

  render() {
    const {isOpen} = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer width={250} openSecondary={true} open={isOpen} >
            <div style={styles.root}>
              <GridList
                cols={1}
                cellHeight={150}
                padding={1}
                style={styles.gridList}
              >
                {this.dealTilesData().map((tile) => (
                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    actionIcon={
                      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <Checkbox
                        style={{'margin-left':10,}}
                        checkedIcon={<ActionFavorite />}
                        uncheckedIcon={<ActionFavoriteBorder />}
                        defaultChecked={tile.isChecked}

                        />
                      </MuiThemeProvider>}
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
