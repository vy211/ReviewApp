const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

//i use supabase for backend wich is a famous
const supabase = createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

class UserModel {
  async getUsers() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    return data;
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
