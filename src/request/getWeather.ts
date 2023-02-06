import {RequestWeatherAPIProps} from '../types';

/**
 * Request the weather on the API of weatherapi.com
 * 
 * doc imporded from <a href='https://www.weatherapi.com/docs/'>weatherapi.com</a> (02/03/2023)
 * 
 * # Parameters
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
 * @param {string=} [props.lang] (Optional) Returns 'condition:text' field in API in the desired language - 
 * Please pass 'lang code' from below table. e.g.: lang=fr
 * | Language                 | lang code |
 * | :----------------------- | :-------- |
 * | Arabic                   | ar        |
 * | Bengali                  | bn        |
 * | Bulgarian                | bg        |
 * | Chinese Simplified       | zh        |
 * | Chinese Traditional      | zh_tw     |
 * | Czech                    | cs        |
 * | Danish                   | da        |
 * | Dutch                    | nl        |
 * | Finnish                  | fi        |
 * | French                   | fr        |
 * | German                   | de        |
 * | Greek                    | el        |
 * | Hindi                    | hi        |
 * | Hungarian                | hu        |
 * | Italian                  | it        |
 * | Japanese                 | ja        |
 * | Javanese                 | jv        |
 * | Korean                   | ko        |
 * | Mandarin                 | zh_cmn    |
 * | Marathi                  | mr        |
 * | Polish                   | pl        |
 * | Portuguese               | pt        |
 * | Punjabi                  | pa        |
 * | Romanian                 | ro        |
 * | Russian                  | ru        |
 * | Serbian                  | sr        |
 * | Sinhalese                | si        |
 * | Slovak                   | sk        |
 * | Spanish                  | es        |
 * | Swedish                  | sv        |
 * | Tamil                    | ta        |
 * | Telugu                   | te        |
 * | Turkish                  | tr        |
 * | Ukrainian                | uk        |
 * | Urdu                     | ur        |
 * | Vietnamese               | vi        |
 * | Wu (Shanghainese)        | zh_wuu    |
 * | Xiang                    | zh_hsn    |
 * | Yue (Cantonese)          | zh_yue    |
 * | Zulu                     | zu        |
 * @returns {ResponseWeatherAPI}
 * @author Nathan Flacher RRontact@nathan-flacher.com>
 */
function getWeatherData (props: RequestWeatherAPIProps): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log('http://api.weatherapi.com/v1/current.json?'+new URLSearchParams(props as any).toString());
        fetch(new Request('http://api.weatherapi.com/v1/current.json?'+new URLSearchParams(props as any).toString()))
            .then(response => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject(new Error('Something went wrong on api server!'));
                }
            }).catch(error => {
                console.error(error);
                reject(error);
            });
    });
}

export default getWeatherData;