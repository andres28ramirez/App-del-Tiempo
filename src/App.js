import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col, } from 'react-flexbox-grid';
/* Importamos los componentes que acabamos de crear */
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
/* import logo from './logo.svg'; */
import './App.css';

const cities = [
    "Buenos Aires,ar",
    "Washington,us",
    "Porlamar,ve",
    "Madrid,es",
    "Caracas,ve",
];

class App extends Component {

  render (){

      return (
          <Grid className="App">
            {/* LLamado del componente utilizado */}
              <Row>
                  <AppBar position="sticky">
                    <Toolbar>
                      <Typography variant="body1" color="inherit">
                        Weather App
                      </Typography>
                    </Toolbar>
                  </AppBar>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <LocationListContainer cities={cities} ></LocationListContainer>
                </Col>
                <Col xs={12} md={6}>
                  <Paper elevation={4}>
                    <div className="details">
                        <ForecastExtendedContainer/>
                    </div>
                  </Paper>
                </Col>
              </Row>
          </Grid>
      );
  }
}

export default App;

