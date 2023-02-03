let initialState = [];
const productData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      console.warn('Action',action)
      return action.data.length + 1;
      break;
    case "REMOVE_PRODUCT":
      return action.data.length ? action.data.length - 1 : action.data.length;
      break;
    case "GET_PRODUCT_LIST":
      return [];
      break;
    default:
      return action.data.length;
      break;
  }
};
export default productData;
