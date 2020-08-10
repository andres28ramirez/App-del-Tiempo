import React from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => 
        <ForecastItem 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data} 
            key={forecast.weekDay+forecast.hour}>
        </ForecastItem>
    );
}

const renderProgress = () => {
    return <div><h2>Cargando pronostico...</h2><CircularProgress size={50}/></div>;
}

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className="forecast-title" >Pronostico Extendido - {city}</h2>
        { forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

export default ForecastExtended;