import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './containers/scenes/Main';
import GameWrapper from './containers/GameWrapper';
import MainWrapper from './containers/MainWrapper';

export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="initial">
        <Scene initial key="welcome" component={MainWrapper} hideNavBar={true} />
        <Scene key="game" component={GameWrapper} hideNavBar={true} />
      </Scene>
    </Router>
  );
}


// <Scene key="details" component={} hideNavBar={true} />
// <Scene key="records" component={} hideNavBar={true} />



// <Scene key="result" component={} />
