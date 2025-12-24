import { Router } from "express";
import fetchUser from "../middleware/fetchUser.js";
import Users from "../models/User.js";


const router = Router();


router.post("/placeorder", fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);

  user.orders.push(req.body.order);
  await user.save();

  res.json({ success: true, orders: user.orders });
});

router.get("/myorders", fetchUser, async (req, res) => {
  const user = await Users.findById(req.user.id);
  res.json({ orders: user.orders });
});

export default router;
