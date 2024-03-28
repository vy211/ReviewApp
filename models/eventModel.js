const { supabase } = require("../supabase");

class EventModel {
  async createEvent({ name, description, event_date }) {
    try {
      const { data, error } = await supabase
        .from("events")
        .insert([{ name, description, event_date }]);

      if (error) {
        throw new Error(error.message);
      }

      return data[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getEvents() {
    try {
      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new EventModel();
