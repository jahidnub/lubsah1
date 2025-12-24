
import jwt from "jsonwebtoken";
import Users from "../models/User.js";

export async function signup(req, res) {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Email Already Exists" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
}

export async function login(req, res) {
  let user = await Users.findOne({ email: req.body.email });
  if (!user) return res.json({ success: false, errors: "Wrong Email Id" });

  if (req.body.password !== user.password)
    return res.json({ success: false, errors: "Wrong Password" });

  const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");
  res.json({ success: true, token });
}
