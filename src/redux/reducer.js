let initialState = [];
const cartData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.data.length + 1;
      break;
    case "REMOVE_FROM_CART":
      return action.data.length ? action.data.length - 1 : action.data.length;
      break;
    case "CLEAR_CART":
      return [];
      break;
    default:
      return action.data.length;
      break;
  }
};
export default cartData;
