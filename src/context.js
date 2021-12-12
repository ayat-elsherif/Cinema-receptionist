import React from "react";

const ticketsContext = React.createContext();

class TicketsProvider extends React.Component {
  state = {
    reservedLeft: [],
    reservedRight: [],
  };

  gettingSeats = (seats) => {
    const seatArr = [];
    for (let i = 1; i <= seats; i++) {
      seatArr.push(i);
    }
    return seatArr;
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
    return (
      <ticketsContext.Provider
        value={{
          ...this.state,
          toggleRes: this.toggleRes,
          gettingSeats: this.gettingSeats,
        }}
      >
        {this.props.children}
      </ticketsContext.Provider>
    );
  }
}

const TicketsConsumer = ticketsContext.Consumer;

export { TicketsConsumer, TicketsProvider };
