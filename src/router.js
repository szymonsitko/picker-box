import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './containers/scenes/Main';
import Game from './containers/scenes/Game';

export const RouterComponent = () => {
  return (
    <Router>
      <Scene key="initial">
        <Scene initial key="welcome" component={Main} hideNavBar={true} />
        <Scene key="game" component={Game} hideNavBar={true} />
      </Scene>
    </Router>
  );
}


// <Scene key="details" component={} hideNavBar={true} />
// <Scene key="records" component={} hideNavBar={true} />



// <Scene key="result" component={} />
