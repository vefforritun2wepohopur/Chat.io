import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './reducers';
 
ReactDOM.render(<Provider store ={createStore(reducers)}> <App /></Provider> , document.getElementById('root'));