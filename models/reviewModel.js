const { supabase } = require("../supabase");

class ReviewModel {
  async createReview({ eventId, rating, comment }) {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .insert([{ event_id: eventId, rating, comment }]);

      if (error) {
        throw new Error(error.message);
      }

      return data[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getReviewsByEventId(eventId) {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("event_id", eventId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateReview(reviewId, { rating, comment }) {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .update({ rating, comment })
        .eq("id", reviewId);

      if (error) {
        throw new Error(error.message);
      }

      return data[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteReview(reviewId) {
    try {
      const { error } = await supabase
        .from("reviews")
        .delete()
        .eq("id", reviewId);

      if (error) {
        throw new Error(error.message);
      }

      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new ReviewModel();
