import React from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import Store from '../../shared/context';
import ExercisesList from './Exercises-list';
import styles, {color} from './styles';

const Favorites = () => {
  const navigation = useNavigation();
  const {theme, favorites} = React.useContext(Store);

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
      <ExercisesList workouts={favorites} />
    </View>
  );
};

export default Favorites;
