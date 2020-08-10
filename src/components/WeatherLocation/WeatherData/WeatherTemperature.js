import React from 'react';
/* IMPORTAMOS EL COMPONENTE DE LOS ICONOS */
import WeatherIcons from 'react-weathericons';
/* IMPORTAMOS EL PROPTYPES */
import PropTypes from 'prop-types';
import './styles.css';

/* Importamos los valores del icono de weather */
import{
    CLOUD,
    SUN, 
    FOG, 
    CLOUDY,
    RAIN,
    SNOW, 
    WINDY,
    THUNDER,
    DRIZZLE, 
} from './../../../constants/weathers'

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny", 
    [FOG]: "fog", 
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow", 
    [WINDY]: "windy",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers", 
};

const getWeatherIcon = weatherstate => {
    const icon = icons[weatherstate];

    const sizeIcon= "4x";
    if(icon)
        return <WeatherIcons className="wicon"  name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons className="wicon"  name={"day-sunny"} size={sizeIcon}/>;
};

const WeatherTemperature = ({weatherstate, temperature}) =>(
    <div className="weatherTemperatureCont" >
        {
            getWeatherIcon(weatherstate)
        }
        <span className="temperature">{temperature}</span>
        <span className="temperatureType">{" C°"}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
};

export default WeatherTemperature;