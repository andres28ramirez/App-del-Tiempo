import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires,ar',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//PARA QUE FUNCIONE LA HERRAMIENTA DE DEVTOOLS
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

//SINO LA VAMOS A USAR LO HACEMOS DE LA SIGUIENTE FORMA
//export const store = createStore(reducers, initialState, applyMiddleware(thunk));