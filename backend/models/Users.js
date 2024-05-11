import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : String,
    email: String,
    age: Number,
},	{ timestamps: true }
)


const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
