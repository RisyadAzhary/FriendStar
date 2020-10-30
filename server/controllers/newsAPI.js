const axios = require('axios')

class NewsController{
<<<<<<< HEAD
  static topHeadlinesNews(req, res, ) {
=======
  static topHeadlinesNews(req, res) {
>>>>>>> development
    axios({
      url: 'https://newsapi.org/v2/top-headlines',
      method: "GET",
      params: {
        country: `${req.query.country}`,
        apiKey: `${process.env.TOKEN_NEWS}`
      }
    })
    .then(result => {
      res.status(200).json(result.data.articles);
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

<<<<<<< HEAD
  static everythingNews(req, res, ) {
=======
  static everythingNews(req, res) {
>>>>>>> development
    axios({
      url: 'https://newsapi.org/v2/everything',
      method: "GET",
      params: {
        q: `${req.query.q}`,
        apiKey: `${process.env.TOKEN_NEWS}`
      }
    })
    .then(result => {
      res.status(200).json(result.data.articles);
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }

<<<<<<< HEAD
  static sourceNews(req, res, ) {
=======
  static sourceNews(req, res) {
>>>>>>> development
    axios({
      url: 'https://newsapi.org/v2/sources',
      method: 'GET',
      params: {
        apiKey: `${process.env.TOKEN_NEWS}`
      }
    })
    .then(result => {
      res.status(200).json(result.data.sources)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
}

module.exports = NewsController