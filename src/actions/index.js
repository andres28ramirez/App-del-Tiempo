import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

const api_key = "65ce6ea7c4edd26521ac7c1c271c2140";
const url_base_weather = "https://api.openweathermap.org/data/2.5/forecast";
const url_weather = "https://api.openweathermap.org/data/2.5/weather";

//payload sera el literal de la ciudad correspondiente que estamos buscando
//ciudad seleccionada por el usuario
export const setSelectedCity = payload => {

    return (dispatch, getState) => {
        const api_url = url_base_weather+"?q="+payload+"&appid="+api_key+"&units=metric";
        
        //ACCIÓN INICIAL = ACTIVAR INDICADOR DE BUSQUEDA
        //INVOCAMOS CON EL DISPATCH AL setCity
        //QUE ESTABLECERA DE FORMA SINCRONA LA CIUDAD ACTUAL AL ESTADO
        dispatch(setCity(payload));

        //state toma el estado actual de la aplicacion
        const state = getState();
        //reviso si existe algo grabado en la cities segun la ciudad y de ser asi
        //retorno el forecastDataDate
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        //esto es para evaluar si hace menos de un minuto hicimos la consulta
        //pues que no haga el fecth de abajo porque invoca el return
        if (date && (now - date) < 1*60*1000){
            return;
        }

        return fetch(api_url).then( resolve => {
            return resolve.json();
        }).then(data => {
            const forecastData = transformForecast(data);

            //modificar el estado con el resultado de la busqueda
            //le pasamos la ciudad que estamos resolviendo y el forecastdata que es la petición
            dispatch(setForecastData({city: payload, forecastData}));
        });
        
    };
};

export const setWeather = payload => {

    return dispatch => {

        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = url_weather+"?q="+city+"&appid="+api_key+"&units=metric";
            fetch(api_weather).then( resolve => {
                return resolve.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({ city, weather }));
            });
        });
        
    }

};