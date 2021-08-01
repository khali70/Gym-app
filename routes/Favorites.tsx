import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {FavoritesStack} from '../@types/navigation';

import FavoritesWorkouts from '../screens/Favorites';
import ExerciseDetails from '../screens/Exercise';

const FavoritesNavigation: React.FC = () => {
  const FavoritesStack = createStackNavigator<FavoritesStack>();
  return (
    <FavoritesStack.Navigator screenOptions={{headerShown: false}}>
      <FavoritesStack.Screen name="Favorites" component={FavoritesWorkouts} />
      <FavoritesStack.Screen name="Details" component={ExerciseDetails} />
    </FavoritesStack.Navigator>
  );
};
export default FavoritesNavigation;
