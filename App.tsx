import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
/**
 * #################################
 * ############ navigation #########
 * #################################
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {state} from './@types/global';
import {
  AuthStack,
  Drawer,
  FavoritesStack,
  HomeStack,
} from './@types/navigation';
import D from './assets/data.json';
/**
 * ##################################
 * ############## screens ###########
 * ##################################
 */
import {CreateAccount, SignIn} from './Components/screens';
import ExerciseDetails from './screens/Exercise';
import FavoritesWorkouts from './screens/Favorites';
import Home from './screens/Home/index';
/**
 * ##################################
 * ######## data & elements #########
 * ##################################
 */
import Store from './shared/context';
import * as theme from './shared/theme';

/**
 * #################################
 * ########## main state ###########
 * #################################
 */
const AuthNavigation: React.FC = () => {
  const AuthStack = createStackNavigator<AuthStack>();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={CreateAccount} />
    </AuthStack.Navigator>
  );
};

const HomeNavigation: React.FC = () => {
  const HomeStack = createStackNavigator<HomeStack>();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={ExerciseDetails} />
    </HomeStack.Navigator>
  );
};
const FavoritesNavigation: React.FC = () => {
  const FavoritesStack = createStackNavigator<FavoritesStack>();
  return (
    <FavoritesStack.Navigator screenOptions={{headerShown: false}}>
      <FavoritesStack.Screen name="Favorites" component={FavoritesWorkouts} />
      <FavoritesStack.Screen name="Details" component={ExerciseDetails} />
    </FavoritesStack.Navigator>
  );
};
const App: React.FC = () => {
  const [state, setState] = React.useState<state>({
    data: D,
    theme: theme,
    favorites: [],
    updateFav: fav => {
      setState({...state, favorites: fav});
    },
  });
  const Drawer = createDrawerNavigator<Drawer>();
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView style={{paddingTop: 0}}>
        <View
          style={{
            height: theme.windowHeight / 6,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: state.theme.color.main,
            marginBottom: 6,
            marginTop: 12,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: state.theme.color.white,
            }}>
            {' '}
            El-Wesam{' '}
          </Text>
        </View>
        <DrawerItemList {...props} activeTintColor={state.theme.color.main} />
      </DrawerContentScrollView>
    );
  }
  return (
    <Store.Provider value={state}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            unmountOnBlur: true,
            headerShown: false,
          }}>
          <Drawer.Screen name="Home" component={HomeNavigation} />
          <Drawer.Screen name="Favorites" component={FavoritesNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Store.Provider>
  );
};

export default App;
