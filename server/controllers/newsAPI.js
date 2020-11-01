const axios = require('axios')

class NewsController{
  static topHeadlinesNews(req, res) {
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

  static everythingNews(req, res) {
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

  static sourceNews(req, res) {
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