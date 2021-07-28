import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type AuthStack = {
  SignIn: undefined;
  SignUp: undefined;
};
type authScreenProp = StackNavigationProp<AuthStack, 'SignIn'>;
type HomeStack = {
  Home: undefined;
  Details: {workout: workout};
};
type HomeScreenProps = StackNavigationProp<HomeStack, 'Home'>;
type FavoritesStack = {
  Favorites: undefined;
  Details: {workout: workout};
};
type FavoritesScreenProp = StackNavigationProp<FavoritesStack, 'Favorites'>;
type Drawer = {
  Home: HomeStack;
  Favorites: FavoritesStack;
};
type DrawerProp = DrawerNavigationProp<Drawer>;
