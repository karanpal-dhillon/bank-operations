import { useState } from "react";

const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const handleClick = () => { };
  return (
    <div>
      <h2>Create a new Customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nationalId">National Id</label>
          <input
            type="text"
            id="nationalId"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Add Customer</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
