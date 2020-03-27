const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const allHomepages = await Homepage.findAll();
    res.json(allHomepages);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const homepageId = req.params.id; //istenilen id'yi userin verdigi paramstan aliyoruz, yani user 3 etikladiysa route params da 3 cikiyor onu alip istenilen homepage bilfilerini vriyoruz
  console.log(req.params); //once id yi alamadim. o yuzden req params a ve id ye baktik.

  try {
    const homepage = await Homepage.findByPk(homepageId, {
      //{ include: [Story] });  WE WILL MODIFY THIS TO GET STORIES WITH USER ID AND NAME FOR LIKE FEATURE

      include: [
        { model: Story, include: [{ model: User, attributes: ["id", "name"] }] }
      ]
    });
    if (!homepage) {
      res.status(404).send("No homepage found");
    } else {
      res.json(homepage);
    }
  } catch (e) {
    next(e);
  }
});

router.put("/:id", auth, async (req, res) => {
  const homepage = await Homepage.findByPk(req.params.id);
  if (!homepage.userId === req.user.id) {
    return res.status(403).send({ message: "You are not authorized" });
  }

  const { title, description, backgroundcolor, color } = req.body;

  await homepage.update({ title, description, backgroundcolor, color });

  return res.send({ homepage });
});

router.post("/:id/stories", auth, async (req, res, next) => {
  const homepage = await Homepage.findByPk(req.params.id);
  try {
    const { name, content, imageurl } = req.body;
    // console.log("YYYYYYY", { name, content, imageurl });
    if (!name || !content) {
      res.status(400).send("missing information");
    } else {
      const newStory = await Story.create({
        name,
        imageurl,
        content,
        homepageId: homepage.id
      });
      res.json(newStory);
    }
  } catch (e) {
    next(e);
  }
});

//this is spesific method of delete in sequelize
router.delete("/:id/stories/:storyId", async (req, res, next) => {
  // get the storyId from params
  const { storyId } = req.params;
  try {
    // find the story
    const story = await Story.findByPk(storyId);
    //check if the story exists
    if (!story) {
      res.status(404).send("story not found");
    } else {
      const deletedStory = await story.destroy();
      res.json({ storyId });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
