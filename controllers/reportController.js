// controllers/reportController.js

const reportModel = require("../models/reportModel");

class ReportController {
  async reportEvent(req, res) {
    try {
      const { email, eventId } = req.body;

      const report = await reportModel.createReport(email, eventId);

      res.status(201).json({ message: "Event reported successfully", report });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getReportsByEventId(req, res) {
    try {
      const { eventId } = req.params;
      const reports = await reportModel.getReportsByEventId(eventId);

      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ReportController();
