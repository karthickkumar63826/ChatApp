import jwt from "jsonwebtoken";

const generateTokenSetCookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
  });
};

export default generateTokenSetCookie;
