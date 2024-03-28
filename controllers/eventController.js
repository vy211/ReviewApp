// controllers/EventController.js
const eventModel = require("../models/eventModel");

class EventController {
  async createEvent(req, res) {
    try {
      const { title, description, date } = req.body;
      const newEvent = await eventModel.createEvent({
        title,
        description,
        date,
      });
      res
        .status(201)
        .json({ message: "Event created successfully", event: newEvent });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getEvents(req, res) {
    try {
      console.log("hey");
      const events = await eventModel.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EventController();
