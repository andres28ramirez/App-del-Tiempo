/* Importamos todo lo de react */
import React from 'react';
/* IMPORTAMOS EL PROPTYPES */
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => {

    //Destructuring 
    // Esto es una tecnica de ES6 que deja que una propiedad con un nombre que queremos asignar 
    // a otra variable o constante o propiedad la podemos asignar de formar directa

    return (
        <div className="locationCont">
            {/* Entre LLaves ya puedo escribir la variable que quiero que muestre */}
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes ={
    city: PropTypes.string.isRequired,
};

export default Location;