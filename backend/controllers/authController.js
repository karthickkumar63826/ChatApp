import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenSetCookie from "../utils/generateToken.js";

const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ Error: "Password doesn't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username is already taken" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenSetCookie(newUser._id, res);

      await newUser.save();
      res.status(201).send(newUser);
    } else {
      return res.status(400).json({ error: "Invalid user details" });
    }
  } catch (error) {
    console.log("Error in signup controller " + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Invalid login credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid login credentials" });
    }

    generateTokenSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { signup, login, logout };
