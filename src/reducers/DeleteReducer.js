export default (state = {}, action) => {
  switch (action.type) {
    case "DELETE_RES":
      return action.payload;
    default:
      return state;
  }
};
