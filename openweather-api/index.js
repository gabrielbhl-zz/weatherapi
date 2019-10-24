const { appId } = require("./key.json");
const axios = require("axios").default;

// maximum of 20 cities
const getCurrentWeather = (cities, callback) =>
  axios
    .get(`https://api.openweathermap.org/data/2.5/group`, {
      params: {
        id: cities.join(","),
        units: "metric",
        appid: appId
      }
    })
    .then(({ data: { list } }) => list.forEach(callback));

const CITIES = [3448439, 3467865, 6322341];
getCurrentWeather(CITIES, res => {
  const {
    id,
    name,
    main: { temp, pressure, humidity, temp_min, temp_max },
    dt: dateNow
  } = res;
  //   console.log(`weather de ${name}: `, res);
  const transformado = {
      name,
      id,
      temp,
      temp_min,
      temp_max,
      pressure,
      humidity,
      dateNow
    };
    /* em vez de imprimir, salvar dados da cidade name/id no banco de dados pra data atual */
    console.log(transformado);
});
