import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {Header} from 'react-native-elements';
import {state} from '../../@types/global';
import {Drawer} from '../../@types/navigation';
import Store from '../../shared/context';
import ExercisesList from './Exercises-list';
import styles from './styles';

const Favorites: React.FC = () => {
  type FavoritesScreenDrawerProps = DrawerNavigationProp<
    Drawer,
    'FavoritesStack'
  >;

  const navigation = useNavigation<FavoritesScreenDrawerProps>();

  type HomeScreenDrawerRoute = RouteProp<Drawer, 'FavoritesStack'>;
  const route = useRoute<HomeScreenDrawerRoute>();

  const {theme} = React.useContext<state>(Store);

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        backgroundColor={theme.color.main}
        leftComponent={{
          icon: 'menu',
          iconStyle: {color: '#fff'},
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{text: route.name, style: {color: '#fff'}}}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => navigation.navigate('HomeStack'),
        }}
      />
      <ExercisesList />
    </View>
  );
};

export default Favorites;
