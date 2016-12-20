// file: examples/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'src/spinner';

import App from './App';
import './app.scss';

// Import some global styles
import 'material-design-lite/src/typography/_typography.scss';

ReactDOM.render(
  <App>
    <h2 style={{textAlign: 'center'}}>Spinner example</h2>
    <div className="loading">
      <Spinner />
    </div>
  </App>,
  document.getElementById('react-root')
);
