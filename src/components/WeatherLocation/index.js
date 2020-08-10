/* Importamos todo lo de react */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
/* Importamos los componentes que acabamos de crear */
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        {/* Parametro City el cual puede ya ser utilizado por el componente Location */}
        <Location city={city}></Location>
        {data ? 
            <WeatherData data={data}></WeatherData> :
            <CircularProgress size={50}/>
        }
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherLocation; 