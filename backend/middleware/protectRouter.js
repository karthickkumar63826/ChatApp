import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRouter = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(400)
        .json({ error: "unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(400).json({ error: "unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userID).select("-password");

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRouter", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export default protectRouter;
