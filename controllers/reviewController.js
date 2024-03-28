// controllers/ReviewController.js
const reviewModel = require("../models/reviewModel");

class ReviewController {
  async createReview(req, res) {
    try {
      const { eventId, rating, comment } = req.body;
      const newReview = await reviewModel.createReview({
        eventId,
        rating,
        comment,
      });
      res
        .status(201)
        .json({ message: "Review created successfully", review: newReview });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getReviewsByEventId(req, res) {
    try {
      const eventId = req.params.eventId;
      const reviews = await reviewModel.getReviewsByEventId(eventId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateReview(req, res) {
    try {
      const reviewId = req.params.reviewId;
      const { rating, comment } = req.body;
      const updatedReview = await reviewModel.updateReview(reviewId, {
        rating,
        comment,
      });
      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteReview(req, res) {
    try {
      const reviewId = req.params.reviewId;
      await reviewModel.deleteReview(reviewId);
      res.json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ReviewController();
