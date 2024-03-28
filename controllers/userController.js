const userModel = require("../models/userModel");

class UserController {
  async getUsers(req, res) {
    console.log("/getUser");
    try {
      const users = await userModel.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);

      const { error } = await userModel.createUser({ name, email, password });
      if (error) {
        throw error;
      }

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateUser(req, res) {
    console.log("update");
    try {
      const { email } = req.params.email;
      console.log(email);
      const datacame = req.body;

      const { error, data } = await userModel.updateUser(email, datacame);
      if (error) {
        throw error;
      }

      res
        .status(200)
        .json({ message: "User updated successfully", user: data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
