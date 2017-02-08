import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // wrapper component needed for HMR

// react-to-mdl based App
import App from './App';

// Styles
import './app.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  );
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
