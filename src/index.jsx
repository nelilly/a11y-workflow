import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx';
import '../src/shared/a11y/reactAxe';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('main')
);
