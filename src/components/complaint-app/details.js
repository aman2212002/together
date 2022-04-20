import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function Details() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log("sucessfully submitted");
  };

  return (
    <div className="complaint-box-details">
      <Form onSubmit={handleSubmit}>
        <div>
          <label>
            Registration No.
            <Form.Control
              type="Void"
              name="registrationno"
              value={inputs.registrationno || ""}
              onChange={handleChange}
              className=""
            />
          </label>
        </div>
        <div>
          <label>
            Room No.
            <Form.Control
              type="number"
              name="roomno"
              value={inputs.roomno || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Tell us the problem in breif
            <br />
            <Form.Control
              as="textarea"
              type="text"
              name="problem"
              value={inputs.problem || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Details;
