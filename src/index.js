import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Decrement from './Decrement';

ReactDOM.render( <App />, document.getElementById('root1'));
ReactDOM.render( <Decrement number="2"/>, document.getElementById('root2'));