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

const window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const Home = () => {
  const navigation = useNavigation();
  const {theme, data} = React.useContext(Store);
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [activeChip, setActiveChip] = React.useState('All');
  const [workouts, setWorkouts] = React.useState([]);
  // BUG update the data schema and remove this temp state
  const [newData, setNewData] = React.useState([]);
  const [muscles, addMuscle] = React.useState([
    'All',
    'Biceps',
    'Deltoids',
    'Triceps',
    'Chest',
    'Abdominals',
    'Hamstrings',
    'Quadriceps',
  ]);

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
  const FilterByTag = tag => {
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
      {isSearch ? (
        <SearchBar
          cancelIcon
          lightTheme
          containerStyle={{
            padding: 0,
            margin: 0,
            minHeight: 50,
            width: theme.windowWidth,
          }}
          inputContainerStyle={{
            padding: 0,
            margin: 0,
            backgroundColor: theme.color.main_light,
          }}
          inputStyle={{color: '#000'}}
          placeholder="Type Here..."
          onChangeText={value => setSearchValue(value)}
          value={searchValue}
          onCancel={() => setIsSearch(!isSearch)}
          showCancel
        />
      ) : (
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
            onPress: () => setIsSearch(!isSearch),
          }}
        />
      )}
      {!isSearch && (
        <View style={{height: 50}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tags}>
            {muscles.map((mName, id) => (
              <Chip
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
      )}
      <ExercisesList FilterByTag={FilterByTag} workouts={workouts} />
    </View>
  );
};

export default Home;
