import Reservation from "../apis/Reservation";
import { source } from "../apis/Reservation";
export const fetchMovies = () => async (dispatch) => {
  const response = await Reservation.get("/movies");
  dispatch({ type: "FETCH_MOVIES", payload: response.data });
};

export const showMovie = (id) => async (dispatch) => {
  const response = await Reservation.get(`/movies/${id}`);
  // console.log(response.data, "i'm from action");
  dispatch({ type: "SHOW_MOVIE", payload: response.data });
};

export const showSeats = (movieId, partyId) => async (dispatch) => {
  const response = await Reservation.get(
    `movies/${movieId}/parties/${partyId}`
  );
  // console.log(response.data, "i'm from action");

  dispatch({ type: "SHOW_SEATS", payload: response.data });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await Reservation.get("/categories");
  // console.log(response.data, "i'm from action categories");
  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};

export const showCategory = (id) => async (dispatch) => {
  const response = await Reservation.get(`/categories/${id}`, {
    cancelToken: source.token,
  });
  // console.log(response.data, "i'm from action single cat");
  dispatch({ type: "SHOW_CATEGORY", payload: response.data });
};

export const submitReservation =
  (client, partyId, seats) => async (dispatch) => {
    const response = await Reservation.post("/tickets", {
      clientName: client,
      partyId: partyId,
      seats: seats,
    });
    dispatch({ type: "SUBMIT_RES", payload: response.data });
    alert("The reservation is succesfully done!!");
  };

export const deleteReservation = (seatId, seatPosition) => async (dispatch) => {
  await Reservation.delete("/tickets", {
    id: seatId,
    position: seatPosition,
  });
  dispatch({
    type: "DELETE_RES",
    payload: { id: seatId, position: seatPosition },
  });
};
