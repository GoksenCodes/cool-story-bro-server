const { Router } = require("express");
const auth = require("../auth/middleware");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

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
    const homepage = await Homepage.findByPk(homepageId, { include: [Story] });
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

  const { title, description, backgroundColor, color } = req.body;

  await homepage.update({ title, description, backgroundColor, color });

  return res.send({ homepage });
});

// async function getHomepageWithStory(id) {
//   const result = await Homepage.findByPk(id, { include: [story] });
//   return result.get({ plain: true });
// }

module.exports = router;
