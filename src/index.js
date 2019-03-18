import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const URL = 'https://www.googleapis.com/books/v1/volumes?';
const API = '&key=AIzaSyDZbmHZ5zoE-uUZoMJOWtDKUzzdq9fHsIA'
ReactDOM.render(<App url={URL} apiKey={API}/>, document.getElementById('root'));

