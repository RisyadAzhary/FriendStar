const express = require("express");
const UserRouter  = require("./user")
const TweetRouter = require("./tweet")
const DeezerRouter = require("./deezer")
const router = express.Router();

//users
router.use("/users", UserRouter)

//tweets
router.use("/tweets", TweetRouter)

//deezer
router.use("/deezers", DeezerRouter)

module.exports = router;
