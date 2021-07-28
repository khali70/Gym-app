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

import styles, {color} from './styles';
import Store from '../../shared/context';
import {FavoritesStack} from '../../@types/navigation';
import {state} from '../../@types/global';

const ExercisesList: React.FC = ({}) => {
  type FavoritesScreenProp = StackNavigationProp<FavoritesStack, 'Favorites'>;
  const navigation = useNavigation<FavoritesScreenProp>();
  const {favorites, updateFav} = React.useContext<state>(Store);
  const delFavorite = (id: number) => {
    updateFav([...favorites.filter(item => item.id != id)]);
  };
  const RenderItem = ({item}: {item: workout}) => (
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
            onPress={() => delFavorite(item.id)}>
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
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default ExercisesList;
