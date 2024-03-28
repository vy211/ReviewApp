const eventModel = require("../models/eventModel");

class EventController {
  async createEvent(req, res) {
    try {
      const { name, description, event_date } = req.body;
      const newEvent = await eventModel.createEvent({
        name,
        description,
        event_date,
      });
      res
        .status(201)
        .json({ message: "Event created successfully", event: newEvent });
    } catch (error) {
      res.status(500).json({ message: "Event created successfully" });
    }
  }

  async getEvents(req, res) {
    try {
      console.log("/Get Event");
      const events = await eventModel.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EventController();
