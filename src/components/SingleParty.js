import React from "react";
import { connect } from "react-redux";
import { showSeats, deleteReservation } from "../actions";
import ReserveConfirmation from "./ReserveConfirmation";

class SingleParty extends React.Component {
  state = { reservedLeft: [], reservedRight: [], doneLeft: [], doneRight: [] };
  componentDidMount() {
    const { movieId, PartyId } = this.props.match.params;
    return this.props.showSeats(movieId, PartyId);
  }

  gettingSeats = (seats) => {
    const seatArr = [];
    for (let i = 1; i <= seats; i++) {
      seatArr.push(i);
    }
    return seatArr;
  };
  leftSeatsPrefix = () => {
    if (this.props.seats.reservedLeft) {
      const resSeatLeft = this.props.seats.reservedLeft;
      let seatLeft = [];
      for (let i of resSeatLeft) {
        i = `leftSeat${i}`;
        seatLeft = [...seatLeft, i];
      }
      console.log(seatLeft, "seatLeft Prefix");
      return seatLeft;
    }
  };
  rightSeatsPrefix = () => {
    if (this.props.seats.reservedRight) {
      const resSeatRight = this.props.seats.reservedRight;
      let seatRight = [];
      for (let i of resSeatRight) {
        i = `rightSeat${i}`;
        seatRight = [...seatRight, i];
      }
      console.log(seatRight, "seatRight Prefix");
      return seatRight;
    }
  };
  showingSeats = (side, seat) => {
    let leftSeat = this.leftSeatsPrefix();
    let rightSeat = this.rightSeatsPrefix();
    const arr = this.gettingSeats(seat);
    return arr.map((seat) => {
      const seatId = `${side}Seat${seat}`;
      let color;
      if (
        this.state.reservedLeft.includes(seatId) ||
        this.state.reservedRight.includes(seatId)
      ) {
        color = "blue";
      }
      if (leftSeat.includes(seatId) || rightSeat.includes(seatId)) {
        color = "green";
      }

      return (
        <span
          className="seats"
          id={seatId}
          key={seatId}
          style={{ backgroundColor: color }}
          onClick={() => this.toggleRes(seatId)}
        >
          {seat}
        </span>
      );
    });
  };
  toggleRes = (seatId) => {
    let resLeft = this.state.reservedLeft;
    let resRight = this.state.reservedRight;
    let resLeftSeat = this.leftSeatsPrefix();
    let resRightSeat = this.rightSeatsPrefix();
    if (seatId.includes("left")) {
      this.setState({ reservedLeft: [...resLeft, seatId] });
    } else if (seatId.includes("right")) {
      this.setState({ reservedRight: [...resRight, seatId] });
    }
    if (resLeft.includes(seatId)) {
      resLeft = resLeft.filter((el) => el != seatId);
      this.setState({ reservedLeft: resLeft });
      // console.log("staaates");
    }
    if (resRight.includes(seatId)) {
      resRight = resRight.filter((el) => el != seatId);
      this.setState({ reservedRight: resRight });
    }
    if (resLeftSeat.includes(seatId)) {
      let x = window.confirm("Are u sure u want to delete this reservation?");
      if (x == true) {
        const position = seatId.substring(0, 4);
        const id = seatId.substring(8, 10);
        console.log(`{id:${id},position:${position}}`);
        this.props.deleteReservation(id, position);
      }
    }
    if (resRightSeat.includes(seatId)) {
      let x = window.confirm("Are u sure u want to delete this reservation?");
      if (x == true) {
        const position = seatId.substring(0, 5);
        const id = seatId.substring(9, 11);
        console.log(`{id:${id},position:${position}}`);
        this.props.deleteReservation(id, position);
      }
    }
  };
  render() {
    console.log(
      this.state.reservedLeft,
      "left",
      this.state.reservedRight,
      "right"
    );
    const { seats } = this.props;
    // console.log(seats.movie_name, seats.time, "i'm in party");
    return (
      <section className="seatsList">
        <h2 className="text-center py-4">
          Party: {seats.movie_name} - {seats.time}
        </h2>
        <div className="allSeats row mx-0">
          <div className="col-lg-6 col-12">
            <h3 className="text-center">Left Seats</h3>
            <p className="leftSeats">
              {this.showingSeats("left", seats.leftSeats)}
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <h3 className="text-center">Right Seats</h3>
            <p className="rightSeats">
              {this.showingSeats("right", seats.rightSeats)}
            </p>
          </div>
        </div>

        <div className="clientsInfo">
          <ReserveConfirmation
            leftSeats={this.state.reservedLeft}
            rightSeats={this.state.reservedRight}
            partyId={seats.party_id}
          />
        </div>
      </section>
    );
  }
}
const mapStatesToProps = (state) => {
  // console.log(state.seats, "state seat");
  return { seats: state.seats };
};
export default connect(mapStatesToProps, { showSeats, deleteReservation })(
  SingleParty
);
