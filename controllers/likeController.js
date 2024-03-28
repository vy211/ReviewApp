// controllers/likeController.js

const likeModel = require("../models/likeModel");

class LikeController {
  async likeEvent(req, res) {
    try {
      const { eventId } = req.params;
      const { userId } = req.body;

      const like = await likeModel.createLike(eventId, userId);

      res.status(201).json({ message: "Event liked successfully", like });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getLikesByEventId(req, res) {
    try {
      const { eventId } = req.params;
      const likes = await likeModel.getLikesByEventId(eventId);

      res.json(likes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getLikesByUserId(req, res) {
    try {
      const { userId } = req.params;
      const likes = await likeModel.getLikesByUserId(userId);

      res.json(likes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async unlikeEvent(req, res) {
    try {
      const { likeId } = req.params;

      await likeModel.deleteLike(likeId);

      res.json({ message: "Event unliked successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new LikeController();
