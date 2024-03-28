const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Define routes for reviews
router.post("/events/:eventId/reviews", reviewController.createReview);
router.get("/events/:eventId/reviews", reviewController.getReviewsByEventId);
router.put("/reviews/:reviewId", reviewController.updateReview);
router.delete("/reviews/:reviewId", reviewController.deleteReview);

module.exports = router;
