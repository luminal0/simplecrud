import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([
    {
      Name: "test",
      Email: "test@test.com",
      Age: "22",
    },
  ]);
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white">
        <Link to="/create" className="btn btn-success flex w-32 ">Add +</Link>
        <table className="table">
          <thead>
            <tr className="text-center text-black">
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {user.map((item) => {
              return (
                <tr key={item.Name}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Age}</td>
                  <td className="gap-2 flex">
                    <Link to="/update" className="btn btn-primary">Update</Link>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
