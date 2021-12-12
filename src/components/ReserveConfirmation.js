import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { submitReservation } from "../actions";
class ReserveConfirmation extends React.Component {
  state = { input: "", value: "" };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  submitToConsole = (e) => {
    e.preventDefault();
    let leftSeats = this.cleanArrleft();
    let rightSeats = this.cleanArrRight();
    const seats = [...leftSeats, ...rightSeats];
    const clientName = this.state.value;
    const partyId = this.props.partyId;
    console.log(
      "client name:",
      clientName,
      "party id:",
      partyId,
      "seats:",
      seats
    );
    this.props.submitReservation(clientName, partyId, seats);
    this.props.history.push("/");
  };
  cleanArrleft = () => {
    let seatLeft = [];
    for (let i of this.props.leftSeats) {
      i = i.substring(8, 10);
      seatLeft = [...seatLeft, { id: i, position: "left" }];
    }
    console.log(seatLeft, "in seats left");
    return seatLeft;
  };
  cleanArrRight = () => {
    let seatRight = [];
    for (let i of this.props.rightSeats) {
      i = i.substring(9, 11);
      seatRight = [...seatRight, { id: i, position: "right" }];
    }
    console.log(seatRight, "in seats right");
    return seatRight;
  };
  clientForm = () => {
    const { leftSeats, rightSeats } = this.props;
    return (
      <Form className="text-center w-25 m-auto mb-5">
        <Form.Group className="mb-3" controlId="clientReservation">
          <Form.Label>Client Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Client Name"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button
          variant="warning"
          type="submit"
          className="px-5"
          onClick={this.submitToConsole}
          disabled={
            (leftSeats.length > 0 || rightSeats.length > 0) && this.state.value
              ? false
              : true
          }
        >
          Submit
        </Button>
      </Form>
    );
  };
  render() {
    // console.log(this.props, "reservconfirm");

    return <div>{this.clientForm()}</div>;
  }
}

const wrapper = withRouter(ReserveConfirmation);

export default connect(null, { submitReservation })(wrapper);
