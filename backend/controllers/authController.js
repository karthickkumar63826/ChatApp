import User from "../models/userModel.js";

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

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullname,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).send(newUser);
  } catch (error) {
    console.log("Error in signup controller" + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
const login = (req, res) => {
  res.send("Welcome to login page");
};
const logout = (req, res) => {
  res.send("Welcome to logout page");
};

export { signup, login, logout };
