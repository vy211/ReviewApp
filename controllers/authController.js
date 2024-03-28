// controllers/AuthController.js
const userModel = require("../models/userModel");

class AuthController {
  async signUp(req, res) {
    try {
      const { name, email, password } = req.body;
      const newUser = await userModel.createUser({ name, email, password });
      res
        .status(201)
        .json({ message: "User signed up successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.loginUser({ email, password });
      res.json({ message: "User logged in successfully", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
