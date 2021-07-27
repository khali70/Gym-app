import {StackNavigationProp} from '@react-navigation/stack';
type AuthStack = {
  SignIn: undefined;
  SignUp: undefined;
};
type authScreenProp = StackNavigationProp<AuthStack, 'SignIn'>;
type HomeStack = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = StackNavigationProp<HomeStack, 'Home'>;
type FavoritesStack = {
  Favorites: undefined;
  Details: undefined;
};
type FavoritesScreenProp = StackNavigationProp<FavoritesStack, 'Favorites'>;
