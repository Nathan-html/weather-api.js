import { Formats, GetWeatherAPIProps, Languages, RequestWeatherAPIProps, ResponseWeatherAPI } from '../types';
import { RequestInfo } from 'node-fetch';
import fetch from 'cross-fetch';
import { defaultFormat, defaultLang } from '../config';

function Request <Props, Response>(parent: Weather, props: Props, api: string) {

    const options = {
        ...props,
        key: parent.key,
        lang: parent.lang
    };

    const url: RequestInfo = `http://api.weatherapi.com/v1/${api}.${parent.format}?${new URLSearchParams(options as any).toString()}`;

    return fetch(url)
        .then(response => {
            return response.json() as Response;
        })
        .catch(error => {
            console.error(error);
            return error;
        });
}

/**
 * # How to use ?
 * 
 * Please provide language and token then choose one of the API below.
 * 
 * 
 * ## Realtime API
 * 
 * Current weather or realtime weather API method allows a user to get up to date current weather information in json and xml. The data is returned as a Current Object.
 * 
 * Current object contains current or realtime weather information for a given city.
 * 
 * ## Forecast API
 * 
 * Forecast weather API method returns upto next 14 day weather forecast and weather alert as json. The data is returned as a Forecast Object.
 * 
 * Forecast object contains astronomy data, day weather forecast and hourly interval weather information for a given city.
 * 
 * forecastday: Parent element
 * 
 * forecastday -> day: 'day' element inside forecastday contains max/min temperature, average temperature
 * 
 * forecastday -> astro
 * 
 * forecastday -> hour:
 * 
 * ## History API
 * ## Future API
 * 
 */
class Weather {

    key: string;
    lang: string = defaultLang;
    format: string = defaultFormat; 

    constructor(key: string, lang: string = defaultLang, format: string = defaultFormat) {

        this.key = key;

        const LanguagesValues: string[] = Object.values(Languages);
        if (LanguagesValues.includes(lang)) {
            this.lang = lang;
        }

        const FormatValues: string[] = Object.values(Formats);
        if (FormatValues.includes(format)) {
            this.format = format;
        }

    }

    /**
     * # Request the Realtime weather
     * 
     * doc imporded from <a href='https://www.weatherapi.com/docs/'>weatherapi.com</a> (02/2023)
     * 
     * ## Parameters
     * @param {string} [props.key] Required - API Key
     * @param {string} [props.q] Required - Query parameter based on which data is sent back. It could be following: 
     * * Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
     * * city name e.g.: q=Paris
     * * US zip e.g.: q=10001
     * * UK postcode e.g: q=SW1
     * * Canada postal code e.g: q=G2J
     * * metar:<metar code> e.g: q=metar:EGLL
     * * iata:<3 digit airport code> e.g: q=iata:DXB
     * * auto:ip IP lookup e.g: q=auto:ip
     * * IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1
     * * bulk
     * @param {string=} [props.days] (Required only with forecast API method.) - 
     * Number of days of forecast required. 
     * days parameter value ranges between 1 and 14. e.g: days=5 
     * If no days parameter is provided then only today's weather is returned.
     * @param {string=} [props.dt] (Optional) 
     * (Required for History and Future API) 
     * Restrict date output for Forecast and History API method. 
     * For history API 'dt' should be on or after 1st Jan, 2010 in yyyy-MM-dd format (i.e. dt=2010-01-01) 
     * For forecast API 'dt' should be between today and next 14 day in yyyy-MM-dd format (i.e. dt=2010-01-01) 
     * For future API 'dt' should be between 14 days and 300 days from today in the future in yyyy-MM-dd format (i.e. dt=2023-01-01)
     * @param {string=} [props.unixdt] (Optional) Unix Timestamp used by Forecast and History API method. 
     * unixdt has same restriction as 'dt' parameter. 
     * Please either pass 'dt' or 'unixdt' and not both in same request. e.g.: unixdt=1490227200
     * @param {string=} [props.end_dt] (Optional - Available for History API) Restrict +ate output for History API method. | 
     * For history API 'end_dt' should be on or after 1st Jan, 2010 in yyyy-MM-dd format (i.e. dt=2010-01-01)
     * 'end_dt' should be greater than 'dt' parameter and difference should not be more than 30 days between the two dates.
     * Only works for API on Pro plan and above.
     * @param {string=} [props.unixend_dt] (Optional) Unix Timestamp used by History API method. - 
     * unixend_dt has same restriction as 'end_dt' parameter. Please either pass 'end_dt' or 'unixend_dt' 
     * and not both in same request. e.g.: unixend_dt=1490227200 
     * @param {string=} [props.hour] (Optional) Restricting forecast or history output to a specific hour in a given day. - 
     * Must be in 24 hour. For example 5 pm should be hour=17, 6 am as hour=6
     * @param {string=} [props.alerts] (Optional) Disable alerts in forecast API output - alerts=yes or alerts=no
     * @param {string=} [props.aqi] (Optional) Enable/Disable Air Quality data in forecast API output - aqi=yes or aqi=no
     * @param {string=} [props.tp] (Optional) Get 15 min interval data for Forecast and History API. 
     * Available for Enterprise clients only. - tp=15
     * @param {string=} [props.lang] (Optional) Returns 'condition:text' field in API in the desired language 
     */
    realtime(props: GetWeatherAPIProps): Promise<any> {
        return Request<any, ResponseWeatherAPI>(this, props, 'current');
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    forecast(props: any): Promise<any> {
        return Request<any, any>(this, props, 'forecast');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    history(props: any): Promise<any> {
        return Request<any, any>(this, props, 'history');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    future(props: any): Promise<any> {
        return Request<any, any>(this, props, 'future');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    searchOrAutocomplete(props: any): Promise<any> {
        return Request<any, any>(this, props, 'search');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    localizationByIp(props: any): Promise<any> {
        return Request<any, any>(this, props, 'ip');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    astronomy(props: any): Promise<any> {
        return Request<any, any>(this, props, 'astronomy');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    timeZone(props: any): Promise<any> {
        return Request<any, any>(this, props, 'timezone');
        // TODO type this function, add jsdoc and create tests
    }

    /**
     * Not yet typed and tested
     * for now you can check the official doc and use properties you want
     */
    sports(props: any): Promise<any> {
        return Request<any, any>(this, props, 'sports');
        // TODO type this function, add jsdoc and create tests
    }

}

export default Weather;