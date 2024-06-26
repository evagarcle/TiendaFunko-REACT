const funkos = (state, action) => {
  switch (action.type) {
    case "GET_FUNKOS":
      return {
        ...state,
        funkos: action.payload
      }
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case "DELETE_FUNKO":
      return {
        ...state,
        cart: state.cart.filter((funko) => funko.id !== action.payload),
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}

export default funkos