const express = require("express")
const TweetController = require("../controllers/tweet")
const weatherAPIController = require("../controllers/weatherAPI")
const newsAPIController = require("../controllers/newsAPI") 
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
router.get('/country', weatherAPIController.weatherCountry)
router.get('/state', weatherAPIController.stateinCountries)
router.get('/cities', weatherAPIController.citiesInState)
router.get('/city', weatherAPIController.cityData)

// News APIs
router.get('/topnews', newsAPIController.topHeadlinesNews)
router.get('/everynews', newsAPIController.everythingNews)
router.get('/source', newsAPIController.sourceNews)

module.exports = router

