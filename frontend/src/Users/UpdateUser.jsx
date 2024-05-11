import React from 'react'

const UpdateUser = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-white text-black">
      <h2 className=" text-2xl font-bold">Update User</h2>
      <form action="">
        <label className="label p-2">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          className="input input-bordered w-full max-w-xs text-white"
        />
        <label className="label p-2">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className="input input-bordered w-full max-w-xs text-white"
        />
        <label className="label p-2">Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          className="input input-bordered w-full max-w-xs text-white"
        />
      </form>
      <button className="btn btn-success mt-5 text-white flex mx-auto w-40">Submit</button>
    </div>
  </div>
  )
}

export default UpdateUser