const axios = require('axios');

const weatherdata = async function (req, res) {
    let location = req.query.q
    let apikey = req.query.appid

    let wetherapi = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

    }
    let data = await axios(wetherapi);
    result = data.data.main.temp
    res.status(200).send({ city: location, temp: result })
}






const weathertempcity = async function (req, res) {
    
    let apikey = req.query.appid
    const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let Tempdata = []
    for (let i = 0; i < cities.length; i++) {
        let location = cities[i]
        let wetherapi = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

        }
        let data = await axios(wetherapi);
        // let result = data.data
        let result = data.data.main.temp
        Tempdata.push({city:location, temp:result});
        Tempdata.sort((a,b)=>a.temp - b.temp);
        
    }
    res.status(200).send(Tempdata)
}




module.exports.weathertempcity = weathertempcity
module.exports.weatherdata = weatherdata