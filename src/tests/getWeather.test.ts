import {RequestWeatherAPIProps, ResponseWeatherAPI} from "../types/index";
import {Weather} from "../index";

function pleaseAdd (prop: string) {
    console.error(`Please add "${prop}" propertie in your environement variables`);
}

test('get realtime weather data', async () => {
    if (!process.env.q) {
        pleaseAdd('q');
        expect(typeof process.env.q).toBe('string');
    } else {
        if (!process.env.key) {
            pleaseAdd('key');
            expect(typeof process.env.key).toBe('string');
        } else {
            // try with good token
            await new Weather(process.env.key, process.env.lang, process.env.format)
                .realtime({q: process.env.q})
                .then(result => {
                    console.log(result);
                    expect(true).toBe(true);
                })
                .catch(error => {
                    console.error(error);
                })
        } 
    }
});