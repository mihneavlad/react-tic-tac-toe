// External deps
import React from 'react';
import { render } from 'react-dom';

// Production optimization
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './components/App';

// Styles
import './styles/main.css';


render(<App />, document.getElementById('root'));

registerServiceWorker();
