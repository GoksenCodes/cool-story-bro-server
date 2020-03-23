const { Router } = require("express");
const Homepage = require("../models").homepage;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allHomepages = await Homepage.findAll();
    res.json(allHomepages);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
