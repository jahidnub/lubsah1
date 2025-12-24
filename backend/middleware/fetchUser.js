import jwt from "jsonwebtoken";

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ errors: "Login required" });

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).json({ errors: "Invalid token" });
  }
};

export default fetchUser;
