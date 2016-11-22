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
    return {
      type: 'SWITCH_OPEN_SKIN'
    }
  },

  onChecked: () => {
    return {
      type: 'SKIN_CHECKED',
      url
    }
  },


}

export default actionSet
