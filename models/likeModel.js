const { supabase } = require("../supabase");

class LikeModel {
  async createLike(eventId, userId) {
    const { data, error } = await supabase
      .from("likes")
      .insert({ eventId, userId })
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getLikesByEventId(eventId) {
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .eq("eventId", eventId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getLikesByUserId(userId) {
    const { data, error } = await supabase
      .from("likes")
      .select("*")
      .eq("userId", userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteLike(likeId) {
    const { data, error } = await supabase
      .from("likes")
      .delete()
      .eq("id", likeId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

module.exports = new LikeModel();
