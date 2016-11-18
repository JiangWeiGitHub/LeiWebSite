const actionSet = {

  showSnack = (text) => {
    return {
      type: 'SHOW_SNACK',
      text
    }
  }

  hideSnack = () => {
    return {
      type: 'HIDE_SNACK'
    }
  }

}

export default actionSet
