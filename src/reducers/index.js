import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, 
         getForecastDataFromCities as _getForecastDataFromCities,
         getWeatherCities as _getWeatherCities } from './cities';
import { city,  } from './city';

export default combineReducers({
    cities,
    city,
});

//el resulFunc va recibir como parametro lo que arroje el selector en el caso de abajo city => city
export const getCity = createSelector(state => state.city, city => city);

//aqui tenemos dos parametros antes del resulFunc
//la primera arroja cities y la segunda arroja la ciudad
//ya la tercera función que es el resultFunc puede ser la función _getForecast.... que estas en cities.js de reducers
//ya que se implementa en base a los dos datos recbidios en los dos parametros anteriores
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
