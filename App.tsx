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
import {Animated, Easing, StatusBar, Text, View} from 'react-native';
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
  const [splash, setSplash] = React.useState<boolean>(true);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const duration = 3500;
    StatusBar.setBackgroundColor(theme.color.main);
    StatusBar.setBarStyle('light-content');
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim]);
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
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }
  if (splash)
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.color.main,
        }}>
        <Animated.Image
          source={require('./assets/arm.png')}
          style={{
            width: 150,
            height: 150,
            tintColor: '#fff',
            opacity: fadeAnim,
          }}
          onLoadEnd={() => setSplash(false)}
        />
      </View>
    );
  return (
    <Store.Provider value={state}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerActiveTintColor: theme.color.main,
            unmountOnBlur: true,
            headerShown: false,
          }}>
          <Drawer.Screen
            name="HomeStack"
            options={{title: 'Home'}}
            component={HomeNavigation}
          />
          <Drawer.Screen
            name="FavoritesStack"
            options={{title: 'Favorites'}}
            component={FavoritesNavigation}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Store.Provider>
  );
};

export default App;
