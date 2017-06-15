import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CreateItinerary from './components/CreateItinerary';

const RouterComponent = () => { 
  return (

    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Log in" />
      <Scene key="main" >
        <Scene key="createItinerary" component={CreateItinerary} title="Create a new itinerary" />
        <Scene key="none" component={CreateItinerary} title="Create a new itinerary" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;