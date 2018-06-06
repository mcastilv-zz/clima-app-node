const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1d69cdcfff7cb50823b71e8781cfd722`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}