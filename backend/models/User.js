import { model } from "mongoose";

const Users = model("Users", {
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: "user" }, 
  cartData: { type: Object },
  orders: { type: Array, default: [] }, 
  date: { type: Date, default: Date.now },
});

export default Users;
