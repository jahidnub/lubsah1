import Users from "../models/User.js";

const fetchAdmin = async (req, res, next) => {
  // First authenticate user
  await fetchUser(req, res, async () => {
    const user = await Users.findById(req.user.id);
    if (user.role !== "admin")
      return res.status(403).json({ errors: "Admin access only" });
    next();
  });
};

export default fetchAdmin;
