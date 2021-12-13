import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "DELETE_RES":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
