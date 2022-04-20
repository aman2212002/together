import { useState } from "react";

function Details() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        console.log("sucessfully submitted");
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Enter your Registration number :
                    <input
                        type="Void"
                        name="registrationno"
                        value={inputs.registrationno || ""}
                        onChange={handleChange}
                    />
                </label>
                
            </div>
            <div>
                <label>Enter your room number
                <input
                    type="number"
                    name="roomno"
                    value={inputs.roomno || ""}
                    onChange={handleChange}
                />
            </label>
            </div>
            <div>
                <label>Enter the problem<br/>
                    <input
                        type="text"
                        name="problem"
                        value={inputs.problem || ""}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <input type="submit" />
        </form>
    )
}
export default Details;