export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
