import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MainPage from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainPage />, document.getElementById('root'));
registerServiceWorker();
