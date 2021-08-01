import React from 'react';
/**
 * #################################
 * ############ navigation #########
 * #################################
 */
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {Drawer} from '../@types/navigation';

/**
 * ##################################
 * #############  routes ############
 * ##################################
 */
import HomeNavigation from './Home';
import FavoritesNavigation from './Favorites';

import * as theme from '../shared/theme';

const EntryRoute: React.FC = () => {
  const Drawer = createDrawerNavigator<Drawer>();

  return (
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
  );
};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{paddingTop: 0}}>
      <View
        style={{
          height: theme.windowHeight / 6,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.color.main,
          marginBottom: 6,
          marginTop: 12,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: theme.color.white,
          }}>
          {' '}
          El-Wesam{' '}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
export default EntryRoute;
