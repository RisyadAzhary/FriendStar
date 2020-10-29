const axios = require('axios');


class DeezerController {
    static findAlbum(req, res) {
        let id = req.params.id
        axios({
            method: "GET",
            url: `https://api.deezer.com/album/${id}`
        })
        .then(result => {
            // console.log(result);
            res.status(200).json(result.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static artist(req, res) {

        let id = req.params.id
        axios({
            method: "GET",
            url: `https://api.deezer.com/artist/${id}`  
        })
        .then(result => {
            res.status(200).json(result.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
    
    static search(req, res) {

        let keyName = req.query.q

        axios({
            method: "GET",
            url: `https://api.deezer.com/search`,
            params: {
                q: `${req.query.q}`
            } 
        })
        .then(result => {
            res.status(200).json(result.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })

    }
}

module.exports = DeezerController