const express = require("express");
const UserRouter  = require("./user")
const TweetRouter = require("./tweet")
const router = express.Router();

//users
router.use("/users", UserRouter)

//tweets
router.use("/tweets", TweetRouter)

module.exports = router;
