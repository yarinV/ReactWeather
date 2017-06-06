var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a551647fd25d6038ebe9af389c7ec5f0&units=metric';

//aac585ccdf7acfa95a0e305885d2b2d5

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requesturl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        return axios.get(requesturl).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.message);
            }else{
                return res.data.main.temp;
            }
            
        }, function (res) {
            throw new Error(res.message);
        });

    }
}