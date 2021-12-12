export default (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_RES":
      return action.payload;
    default:
      return state;
  }
};
