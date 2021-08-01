import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeStack} from '../@types/navigation';

import Home from '../screens/Home';
import ExerciseDetails from '../screens/Exercise';

const HomeNavigation: React.FC = () => {
  const HomeStack = createStackNavigator<HomeStack>();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={ExerciseDetails} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigation;
