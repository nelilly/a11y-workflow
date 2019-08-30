import React from 'react';
import ReactDom from 'react-dom';
if (process.env.NODE_ENV === 'development' && window.Promise) {
  const axe = require('react-axe');
  axe(React, ReactDom, 1000);
}
