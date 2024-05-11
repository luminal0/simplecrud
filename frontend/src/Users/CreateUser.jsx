import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/createUser", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white text-black">
        <h2 className=" text-2xl font-bold">Add User</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered w-full max-w-xs text-white"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <label className="label p-2">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="input input-bordered w-full max-w-xs text-white"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <label className="label p-2">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="input input-bordered w-full max-w-xs text-white"
              value={inputs.age}
              onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
            />
          </div>
        <button className="btn btn-success mt-5 text-white flex mx-auto w-40">
          Submit
        </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
