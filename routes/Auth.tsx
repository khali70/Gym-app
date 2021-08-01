import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AuthStack} from '../@types/navigation';
import {CreateAccount, SignIn} from '../Components/screens';

const AuthNavigation: React.FC = () => {
  const AuthStack = createStackNavigator<AuthStack>();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={CreateAccount} />
    </AuthStack.Navigator>
  );
};
