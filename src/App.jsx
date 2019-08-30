import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import 'regenerator-runtime/runtime';
import '../src/shared/a11y/reactAxe';
import Routes from './Routes.jsx';

const SVGAvatar = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12" /><text x="50%" y="55%" style={{fill: '#000', textAnchor: 'middle', alignmentBaseline: 'middle', fontSize: '10', fontFamily: 'sans-serif'}}>{props.text}</text></svg>
  );
};

const SVGIcon = props => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12" /><text x="50%" y="55%" style={{fill: '#fff', textAnchor: 'middle', alignmentBaseline: 'middle', fontSize: '20', fontFamily: 'sans-serif'}}>{props.text}</text></svg>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
  }

  render() {
    return (
      <>
        <header className="header">
          <section>
            <h1><NavLink exact activeClassName="active" to="/">A11Y Workflow</NavLink></h1>
            <nav className="menu">
              <NavLink exact activeClassName="active" to="/" className="menu_user" aria-haspopup="true"><SVGAvatar text="M" /> <span className="menu_username">menu</span></NavLink>
              <ul className="menu_fly" aria-label="submenu">
                {/* <li className="menu_item"><NavLink exact activeClassName="active" to="/about/" className="menu_link">Instructions</NavLink></li>
                <li className="menu_item"><NavLink exact activeClassName="active" to="/about/" className="menu_link">Components</NavLink></li> */}
                <li className="menu_item"><NavLink exact activeClassName="active" to="/about/" className="menu_link">About</NavLink></li>
              </ul>
            </nav>
          </section>
        </header>
        <Routes />
        <footer className="footer">
          <nav>
            <p><svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" /></svg> <a href="https://github.com/nelilly/a11y-workflow">a11y-workflow on github</a></p>
          </nav>
          <p className="copyright">&copy;2019 <a href="http://nelilly.greententacles.com">N.E. Lilly</a></p>
        </footer>
      </>
    );
  }
};

export default withRouter(App);

App.propTypes = {
  history: PropTypes.object,
};

SVGIcon.propTypes = {
  text: PropTypes.string,
};

SVGAvatar.propTypes = {
  text: PropTypes.string,
};
