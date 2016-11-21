const actionSet = {

  showSkin: () => {
    return {
      type: 'SHOW_SKIN'
    }
  },

  hideSkin: () => {
    return {
      type: 'HIDE_SKIN'
    }
  },

  switchOpenSkin: () => {
    console.log(this.state)
    return {
      type: 'SWITCH_OPEN_SKIN'
    }
  }

}


//const actionSet = { type: 'switchOpenSkin' }



export default actionSet
