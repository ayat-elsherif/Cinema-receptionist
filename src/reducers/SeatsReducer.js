export default (state = {}, action) => {
  switch (action.type) {
    case "SHOW_SEATS":
      return action.payload;
    default:
      return state;
  }
};
