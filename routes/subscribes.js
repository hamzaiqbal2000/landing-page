const { Subscribe, validate } = require("../models/subscribe");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    //validating
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //creating a new subject object
    const subscribe = new Subscribe({
      email: req.body.email,
      code: req.body.code,
    });

    await subscribe.save();
    res.send(subscribe);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
