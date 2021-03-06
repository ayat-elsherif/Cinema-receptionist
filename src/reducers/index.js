import { combineReducers } from "redux";
import TicketingReducer from "./TicketingReducer";
import partiesReducer from "./partiesReducer";
import SeatsReducer from "./SeatsReducer";
import CategoriesReducer from "./CategoriesReducer";
import CategoryReducer from "./CategoryReducer";
import DeleteReducer from "./DeleteReducer";
export default combineReducers({
  ticketing: TicketingReducer,
  parties: partiesReducer,
  seats: SeatsReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  delete: DeleteReducer,
});
