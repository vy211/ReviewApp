const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Define routes for events
router.post("/events", eventController.createEvent);
router.get("/events", eventController.getEvents);

module.exports = router;
