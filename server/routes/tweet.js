const express = require("express")
const TweetController = require("../controllers/tweet")
const { stateinCountries } = require("../controllers/weatherAPI")
const weatherAPI = require("../controllers/weatherAPI")
// const authentication = require("../middlewares/authentication")
// const authorization = require("../middlewares/authorization")
const router = express.Router()

// router.use(authentication)

//liat tweet si User
router.get("/", TweetController.showAll)

//create tweet si User
router.post("/", TweetController.create)

//edit tweet si User
// router.put("/:id", authorization, TweetController.edit)

//delete tweet si User
// router.delete("/:id", authorization, TweetController.delete)



// Weather APIs
router.get('/country', weatherAPI.weatherCountry)
router.get('/state', weatherAPI.stateinCountries)
router.get('/cities', weatherAPI.citiesInState)
router.get('/city', weatherAPI.cityData)

module.exports = router

