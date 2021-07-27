import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import styles, {color, TouchableCardContainer} from './styles';
import Store from '../../shared/context';

const ExercisesList = ({}) => {
  // type FavoritesScreenProp = StackNavigationProp<FavoritesStack, 'Favorites'>;
  const navigation = useNavigation();
  const {favorites, updateFav} = React.useContext(Store);
  const delFavorite = id => {
    updateFav([...favorites.filter(item => item.id != id)]);
  };
  const RenderItem = ({item, index}) => (
    <TouchableHighlight
      style={styles.container}
      underlayColor={'transparent'}
      onPress={() => navigation.push('Details', {workout: item})}>
      <View style={[styles.wrapper]}>
        <Image source={{uri: item.images[0]}} style={styles.img} />

        <View style={[styles.info]}>
          <Text style={[styles.name]}>{item.name}</Text>

          <View style={[styles.muscles]}>
            {item.muscles.map((muscle, idx) => (
              <Text style={[styles.muscle]} key={idx} onPress={() => {}}>
                {muscle}
              </Text>
            ))}
          </View>
        </View>

        <View style={[styles.accessoryView]}>
          <TouchableOpacity
            style={[styles.accessoryWrapper]}
            onPress={() => delFavorite(item.id)}
            underlayColor={'transparent'}>
            <Icon
              name={`trash`}
              type={'font-awesome-5'}
              size={20}
              containerStyle={{
                borderWidth: 0,
                borderColor: color.secondary,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              color={color.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={styles.main}>
      <FlatList
        data={favorites}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default ExercisesList;
