import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Store from '../../shared/context';
import styles, {color} from './styles';
import {HomeStack} from '../../@types/navigation';
import {state} from '../../@types/global';
const ExercisesList: React.FC<{
  FilterByTag: (tag: muscle) => void;
  workouts: workout[];
}> = ({FilterByTag, workouts}) => {
  type HomeScreenProps = StackNavigationProp<HomeStack, 'Home'>;
  const navigation = useNavigation<HomeScreenProps>();
  const {theme, favorites, updateFav} = React.useContext<state>(Store);
  const addFav = (item: workout) => {
    if (favorites.includes(item)) {
      updateFav([...favorites.filter(({id}) => id !== item.id)]);
    } else {
      updateFav([...favorites, item]);
    }
  };
  const RenderItem = ({item, index}: {item: workout; index: number}) => (
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
              <Text
                style={[styles.muscle]}
                key={idx}
                onPress={() => {
                  FilterByTag(muscle);
                }}>
                {muscle}
              </Text>
            ))}
          </View>
        </View>

        <View style={[styles.accessoryView]}>
          <TouchableOpacity
            style={[styles.accessoryWrapper]}
            onPress={() => addFav(item)}
            // underlayColor={'transparent'}
          >
            <Icon
              name={!favorites.includes(item) ? `plus-square` : 'minus-square'}
              solid
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
        data={workouts}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
export default ExercisesList;
