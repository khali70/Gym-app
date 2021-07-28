import React from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import Store from '../../shared/context';
import ExercisesList from './Exercises-list';
import styles, {color} from './styles';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Drawer} from '../../@types/navigation';
import {state} from '../../@types/global';

const Favorites: React.FC = () => {
  type FavoritesScreenDrawerProps = DrawerNavigationProp<Drawer, 'Favorites'>;

  const navigation = useNavigation<FavoritesScreenDrawerProps>();
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
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => navigation.navigate('Home'),
        }}
      />
      <ExercisesList />
    </View>
  );
};

export default Favorites;
