/* Importamos todo lo de react */
import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
/* IMPORTAMOS EL PROPTYPES */
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({ data: { temperature, weatherstate, humidity, wind } }) => {

    return (
        <div className="weatherDataCont" >
            <WeatherTemperature 
                temperature={temperature} 
                weatherstate={weatherstate}
            />
            <WeatherExtraInfo 
                humidity={humidity} 
                wind={wind}
            />
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;