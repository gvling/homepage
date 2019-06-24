import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import CardContainer from './containers/Container';


class Root extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <CardContainer />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Root />, root);
