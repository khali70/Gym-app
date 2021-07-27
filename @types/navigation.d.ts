import {StackNavigationProp} from '@react-navigation/stack';
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
  Home: undefined;
  Favorites: undefined;
};
