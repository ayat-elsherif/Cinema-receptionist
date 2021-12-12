import React from "react";
import { Form, Button } from "react-bootstrap";

class ClientForm extends React.Component {
  state = { value: "" };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.handleFromSubmit(this.state.value);
  };
  render() {
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
          disabled={this.state.value ? false : true}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default ClientForm;
