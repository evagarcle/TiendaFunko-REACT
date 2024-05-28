const funkos = (state, action) => {
  switch (action.type) {
    case "GET_FUNKOS":
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
}

export default funkos