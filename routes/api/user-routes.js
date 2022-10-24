const router = require("express").Router();

const { User } = require("../../models");

router.get("/", (req, rest) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, rest) => {});

router.post("/", (req, rest) => {});

router.put("/:id", (req, rest) => {});

router.delete("/:id", (req, rest) => {});

module.exports = router;
