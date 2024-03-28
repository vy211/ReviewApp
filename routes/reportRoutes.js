const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// Report an event
router.post("/events/report", reportController.reportEvent);

// Get reports by event ID
router.get("/events/:eventId/reports", reportController.getReportsByEventId);

module.exports = router;
