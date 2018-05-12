import React from 'react';
import { Route } from 'react-router-dom';

import requireAuth from './hoc/requireAuthentication';
import Header from './Header';
import Resources from './Resources';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path='/resources' component={ requireAuth(Resources) } />
      </div>
    );
  }
};

export default App;
