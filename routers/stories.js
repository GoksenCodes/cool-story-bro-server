const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, content, imageurl } = req.body;
    if (!name || !content) {
      res.status(400).send("missing information");
    } else {
      const newStory = await Story.create(req.body);
      res.json(newStory);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
