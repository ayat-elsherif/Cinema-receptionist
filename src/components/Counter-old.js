import React from "react";
import ReserveConfirmation from "./ReserveConfirmation";
class Counter extends React.Component {
  state = { reservedLeft: [], reservedRight: [] };

  gettingSeats = () => {
    const seatArr = [];
    for (let i = 1; i <= this.props.seats; i++) {
      seatArr.push(i);
    }
    return seatArr;
  };
  showingSeats = () => {
    const arr = this.gettingSeats();
    return arr.map((seat) => {
      const seatId = `${this.props.side}Seat${seat}`;
      let color;
      if (
        this.state.reservedLeft.includes(seatId) ||
        this.state.reservedRight.includes(seatId)
      ) {
        color = "blue";
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
  };

  render() {
    console.log(this.props, "all props in counter");

    return <>{this.showingSeats()}</>;
  }
}

export default Counter;
