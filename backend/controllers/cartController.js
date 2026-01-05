import Users from "../models/User.js";


export async function addToCart(req, res) {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;

  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );

  res.send("Added to Cart");
}

export async function removeFromCart(req, res) {
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;

  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );

  res.send("Removed From Cart");
}
export async function getCart(req, res) {
  try {
    const userData = await Users.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userData.cartData || {});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
