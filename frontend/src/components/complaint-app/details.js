import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
function Details() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.files) {
      const file = event.target.files[0];
      setInputs({ ...inputs, [name]: file });
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };
   async function handleSubmit(event){
    event.preventDefault();
    console.log("inside handleSubmit");
     await fetch("https://togetherBackend.aman2212002.repl.co/save", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        registrationNo: inputs.registrationno,
        roomNo: inputs.roomno,
        problem: inputs.problem
      })
    })
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))


    // Swal.fire({
    //   title: "Do you want to file the complaint?",
    //   showCancelButton: true,
    //   showConfirmButton: true,
    //   confirmButtonColor: "#52c74a",
    //   showCloseButton: true,
    //   showDenyButton: true,
    //   denyButtonText: "No",
    // }).then(async (result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     Swal.fire("Saved!", "", "success");
    //     console.log(inputs);
    //   } else if (result.isDenied) {
    //     Swal.fire("Changes are not saved", "", "info");
    //   }
    // });
  };

  return (
    <div className="complaint-box">
      <div className="complaint-box-details text-white">
        <h1>File a Complaint</h1>
        <form onSubmit={(event) => handleSubmit(event)} className="text-white w-100">
          <div>
            <label className="text-white">
              Registration No.
              <Form.Control
                type="Void"
                name="registrationno"
                value={inputs.registrationno || ""}
                onChange={handleChange}
                className="w-100"
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
          <div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload the image</Form.Label>
              <Form.Control
                type="file"
                name="problemImage"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Details;
