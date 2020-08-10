import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from './../actions';

export const cities = (state = {}, action) => {
    switch (action.type){
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            //city es el referente para el estado que vamos hacer de cities
            //y ya dentro de este se grabara los otros estados que nosotros 
            //queremos manejar
            //clave para mantener todo lo que tiene, en este caso weather
            //suma el forecastdata a lo que ya tiene
            return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() }}
        }
        
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return {...state, [city]: { ...state[city], weather: null }};
        }

        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            return {...state, [city]: { ...state[city], weather }};
        }

        default:
            return state;
    }
};

//SELECTOR
//el state[] se refiere al state que maneja cities 
//y city interno es para indicar cual ciudad en especifico
export const getForecastDataFromCities = 
            createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

//cities es un objeto que tiene otros objetos segun lo que esta en el estado
//se le pasa con clave y valor, donde la clave va ser el nombre de la ciudad
//y el valor sera el objeto interno que seria el weather asociado a la ciudad
const fromObjectToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));
        
export const getWeatherCities = 
            createSelector(state => fromObjectToArray(state), cities => cities);