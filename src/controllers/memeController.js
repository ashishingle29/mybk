const axios = require('axios');
const { response } = require('express');

const createMeme = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let memeid = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let data = await axios(memeid);
        res.status(200).send(data.data)
    } catch (err) {
        res.status(500).send(err.message)

    }
}

module.exports.createMeme = createMeme