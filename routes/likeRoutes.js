const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

// Like an event
router.post("/events/:eventId/like", likeController.likeEvent);

// Get likes by event ID
router.get("/events/:eventId/likes", likeController.getLikesByEventId);

// Get likes by user ID
router.get("/users/:userId/likes", likeController.getLikesByUserId);

// Unlike an event
router.delete("/likes/:likeId", likeController.unlikeEvent);

module.exports = router;
