const axios = require('axios');


class DeezerController {
    static findAlbum(req, res) {
        axios({
            method: "GET",
            url: "https://api.deezer.com/album/302127"
        })
        .then(result => {
            // console.log(result);
            res.status(200).json(result.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static findArtist(req, res) {
        axios({
            method: "GET",
            url: "https://api.deezer.com/artist/1"
        })
        .then(result => {
            res.status(200).json(result.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static artist(req, res) {

      
        axios({
            method: "GET",
            url: `https://api.deezer.com/artist/27` 
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