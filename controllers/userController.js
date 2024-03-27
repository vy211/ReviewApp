// controllers/userController.js
const userModel = require('../models/userModel');

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userModel.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Add other controller methods
}

module.exports = new UserController();
