<div align='center' style='align: center;'>
<a href="https://www.weatherapi.com/" title="Free Weather API"><img src='./public/weatherapi_logo.webp' alt="Weather data by WeatherAPI.com" border="0" style='width: 75%; margin: 32px'></a>
</div>

# About

weather-api.ts is an unofficial plugin that allows you to easily interact with the API of weatherapi.com

# Installation

```
npm install weather-api.ts
yarn add weather-api.ts
pnpm add weather-api.ts
```

# Uses

```ts
// get realtime weather data with a query
let weatherData;
await new Weather(KEY, LANG, FORMAT)
    .realtime({q: QUERY})
        .then(result => {
            weatherData = result;
        })
        .catch(error => {
            console.error(error);
        });
```


# Links

* <a href='https://github.com/Nathan-html/weather-api.js'>Github</a>
* <a href='https://www.npmjs.com/package/@luaft/weather-api.ts'>npm</a>

# Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to <a href="https://github.com/Nathan-html/weather-api.js/issues/new" title="Free Weather API">report an issue on Github</a> or <a href="mailto:contact@nathan-flacher.com" title="Free Weather API">send me a mail</a>.

<p align='center' style='align: center;'>
<a href="https://www.weatherapi.com" title="Free Weather API">WeatherAPI.com</a>
</p>