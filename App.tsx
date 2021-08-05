import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
// routes
import MainRoute from './routes/index';
// JSX elements
import {NavigationContainer} from '@react-navigation/native';
import {Animated, StatusBar, View} from 'react-native';
// types
import {state} from './@types/global';
// data & state
import D from './assets/data.json';
import Store from './shared/context';
import * as theme from './shared/theme';
import Splash from './Splash';

const App: React.FC = () => {
  const [viewSplash, setSplashState] = React.useState<boolean>(true);

  const [state, setState] = React.useState<state>({
    workouts: D,
    theme: theme,
    favorites: [],
    updateFav: fav => {
      setState({...state, favorites: fav});
    },
    splash: {
      hide: () => {
        setSplashState(false);
      },
    },
  });
  if (viewSplash) return <Splash setEndAnimation={setSplashState} />;
  return (
    <Store.Provider value={state}>
      <StatusBar backgroundColor={theme.color.main} barStyle="light-content" />
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
    </Store.Provider>
  );
};

export default App;
