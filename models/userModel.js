require("dotenv").config();
const { supabase } = require("../supabase");

class UserModel {
  async getUsers() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
  }

  async loginUser({ email, password }) {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createUser(userData) {
    try {
      const { error } = await supabase.from("users").insert(userData);
      console.log("inserted");
      if (error) throw error;
      return "success";
    } catch (error) {
      throw error;
    }
  }
  async updateUser(email, userData) {
    console.log(email);
    console.log(userData);
    try {
      const { error } = await supabase
        .from("users")
        .update(userData)
        .eq("email", email);
      if (error) throw error;
      return "success";
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserModel();
