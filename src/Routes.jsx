import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Page404 from './pages/Page404/index.jsx';

const Routes = ({childProps}) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;

Routes.propTypes = {
  childProps: PropTypes.object,
};
