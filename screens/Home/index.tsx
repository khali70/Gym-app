import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header, SearchBar, Chip} from 'react-native-elements';
import Store from '../../shared/context';
import {ListItem, Avatar, Icon} from 'react-native-elements';
import ExercisesList from './Exercises-list';
import styles, {color} from './styles';
import {state} from '../../@types/global';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Drawer} from '../../@types/navigation';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Home = () => {
  type HomeScreenDrawerProps = DrawerNavigationProp<Drawer, 'HomeStack'>;
  const navigation = useNavigation<HomeScreenDrawerProps>();
  const {theme, data} = React.useContext<state>(Store);
  const [activeChip, setActiveChip] = React.useState<muscle>('All');
  const [workouts, setWorkouts] = React.useState<workout[]>([]);
  // BUG update the data schema and remove this temp state
  const [newData, setNewData] = React.useState<workout[]>([]);
  const [muscles, addMuscle] = React.useState<muscle[]>(['All']);

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    const newDataStructure = [];
    // FIXME reStructure the data and remove this algorithm
    const tags = [...muscles];
    for (const key in data) {
      for (const i of data[key]) {
        newDataStructure.push(i);
        for (const m of i.muscles) {
          if (!tags.includes(m)) tags.push(m);
        }
      }
    }
    addMuscle([...tags]);
    setWorkouts([...newDataStructure]);
    setNewData([...newDataStructure]);
  }, []);
  const FilterByTag = (tag: muscle) => {
    setActiveChip(tag);
    if (tag === 'All') {
      setWorkouts(newData);
    } else {
      const muscleWorkoutArray = newData.filter(({muscles}, idx) =>
        muscles.includes(tag),
      );
      setWorkouts(muscleWorkoutArray);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        backgroundColor={theme.color.main}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          iconStyle: {color: '#fff'},
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{
          icon: 'home',
          color: '#fff',
        }}
      />

      <View style={{height: 50}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tags}>
          {muscles.map((mName, id) => (
            <Chip
              TouchableComponent={TouchableWithoutFeedback as any}
              key={id}
              title={mName}
              type={activeChip === mName ? 'solid' : 'outline'}
              titleStyle={activeChip !== mName && styles.outlineChipTitle}
              buttonStyle={
                activeChip === mName ? styles.activeChip : styles.outlineChip
              }
              onPress={() => {
                FilterByTag(mName);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <ExercisesList FilterByTag={FilterByTag} workouts={workouts} />
    </View>
  );
};

export default Home;
