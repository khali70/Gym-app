import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Chip, Header} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {state} from '../../@types/global';
import {Drawer} from '../../@types/navigation';
import Store from '../../shared/context';
import ExercisesList from './Exercises-list';
import styles from './styles';

const Home = () => {
  type HomeScreenDrawerProps = DrawerNavigationProp<Drawer, 'HomeStack'>;
  const navigation = useNavigation<HomeScreenDrawerProps>();
  const {theme, workouts: data} = React.useContext<state>(Store);
  const [activeChip, setActiveChip] = React.useState<muscle>('All');
  const [workouts, setWorkouts] = React.useState<workout[]>(data);
  const [muscles, addMuscle] = React.useState<muscle[]>(['All']);

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    // FIXME optimize the code
    const tags = [...muscles];
    for (const i of data) {
      for (const m of i.muscles) {
        if (!tags.includes(m)) tags.push(m);
      }
    }
    addMuscle([...tags]);
  }, []);
  const FilterByTag = (tag: muscle) => {
    setActiveChip(tag);
    if (tag === 'All') {
      setWorkouts(data);
    } else {
      const muscleWorkoutArray = data.filter(({muscles}, idx) =>
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
