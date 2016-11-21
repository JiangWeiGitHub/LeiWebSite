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
    console.log("actionSet")
    return {
      type: 'SWITCH_OPEN_SKIN'
    }
  }

}

export default actionSet
