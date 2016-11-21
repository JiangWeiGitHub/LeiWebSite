import React from 'react'
import { render } from 'react-dom'
import ReactDom from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import Drawer from 'material-ui/Drawer'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

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
    author: 'jill111',
    featured: true,
  },
  {
    img: '/images/backgrounds/bg_img01.jpg',
    title: 'Blue Sea',
    author: 'jill111',
    featured: true,
  },
  {
    img: '/images/backgrounds/bg_img02.jpg',
    title: 'Yellow Leaf',
    author: 'pashminu',
  },
  {
    img: '/images/backgrounds/bg_img03.jpg',
    title: 'Purple Sky',
    author: 'Danson67',
  },
  {
    img: '/images/backgrounds/bg_img04.jpg',
    title: 'Colorful Bubble',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: '/images/backgrounds/bg_img05.jpg',
    title: 'Ice River',
    author: 'Hans',
  },

  {
    img: '/images/backgrounds/bg_img06.jpg',
    title: 'Geometric Figure',
    author: 'fancycravel',
  },
  {
    img: '/images/backgrounds/bg_img07.jpg',
    title: 'Ice Ocean',
    author: 'jill111',
  },
  {
    img: '/images/backgrounds/bg_img08.jpg',
    title: 'Green Nature',
    author: 'BkrmadtyaKarki',
  },
]

class DrawerSkin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: true}
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Drawer width={250} openSecondary={true} open={this.state.isOpen} >
  <div style={styles.root}>
    <GridList
      cols={1}
      cellHeight={150}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 1 : 1}
          rows={tile.featured ? 1 : 1}
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
