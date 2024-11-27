const User = require("../models/user");
const validator = require("validator");

const createUser = async (req, res) => {
  const { name, email, age, gender } = req.params;

  if (!name || !email || !age || !gender) {
    return res
      .status(400)
      .send("All fields (name, email, age, gender) are required");
  }

  if (!validator.isEmail(email)) {
    return res.status(400).send("Please enter the valid email");
  }
  if (parseInt(age) < 0) {
    return res.status(400).send("Age must be a positive number");
  }

  if (!["male", "female", "other"].includes(gender.toLowerCase())) {
    return res.status(400).send("Gender must be 'male', 'female', or 'other'");
  }

  try {
    // Create new user
    const newUser = await User.create({ name, email, age, gender });

    // Send success response
    return res.status(201).send(newUser);
  } catch (err) {
    // Handle unique constraint violations
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send("Email already exists");
    }

    // Handle other errors
    return res.status(500).send("Server error");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "Succesfully got the user details",
      users,
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Invalid user ID");
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send("Please enter the valid user ID");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Invalid user ID");
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(200).send("User not found");
    }
    await user.destroy();
    res.status(200).send("Succesfully deleted the user");
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

const updateUserById = async (req, res, next) => {
  const { id, name } = req.params;
  if (!id) {
    res.status(400).send("Please provide the user ID");
  }
  if (!name) {
    res.status(400).send("Please provide the user name");
  }
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send("User ID not found");
    }
    user.name = name;
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteById,
  getUserById,
  updateUserById,
};
