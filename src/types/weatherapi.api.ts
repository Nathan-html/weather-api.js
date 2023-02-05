declare type RequestWeatherAPIProps = {
    key: string,
    q: string,
    days?: string,
    dt?: string,
    unixdt?: string,
    end_dt?: string,
    unixend_dt?: string
    hour?: string,
    alerts?: string,
    aqi?: string,
    tp?: string,
    lang?: string,

}

declare type ResponseWeatherAPI = {
    location: {
        name: string,
        region: string,
        country: string,
        lat: number,
        lon: number,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: string,
        last_updated: string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number
        pressure_in: number,
        precip_mm: number,
        precip_in: number
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    }
}

declare enum Languages {
    Arabic =                'ar',
    Bengali = 	            'bn',
    Bulgarian =             'bg',
    ChineseSimplified = 	'zh',
    ChineseTraditional = 	'zh_tw',
    Czech =             	'cs',
    Danish =            	'da',
    Dutch =             	'nl',
    Finnish =           	'fi',
    French =            	'fr',
    German =            	'de',
    Greek =              	'el',
    Hindi =             	'hi',
    Hungarian =         	'hu',
    Italian =            	'it',
    Japanese =           	'ja',
    Javanese =          	'jv',
    Korean =            	'ko',
    Mandarin =           	'zh_cmn',
    Marathi =              	'mr',
    Polish =            	'pl',
    Portuguese =        	'pt',
    Punjabi =           	'pa',
    Romanian =          	'ro',
    Russian =           	'ru',
    Serbian =           	'sr',
    Sinhalese =         	'si',
    Slovak =             	'sk',
    Spanish =           	'es',
    Swedish =            	'sv',
    Tamil =             	'ta',
    Telugu =             	'te',
    Turkish =            	'tr',
    Ukrainian =          	'uk',
    Urdu =               	'ur',
    Vietnamese =        	'vi',
    WuShanghainese =    	'zh_wuu',
    Xiang =              	'zh_hsn',
    YueCantonese =       	'zh_yue',
    Zulu =                  'zu'
}