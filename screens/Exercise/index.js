import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import {Card, Button, Icon, Text, Divider} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import Store from '../../shared/context';
import styles, {padding} from './styles';

const Details = ({route}) => {
  const {data} = React.useContext(Store);
  const workout = route.params.workout ?? data.chest[0];
  React.useEffect(() => {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={[{height: 270}]}>
        <ImgSwiper workout={workout} />
      </View>
      <ExerciseInfo workout={workout} />

      <View>
        <Instructions workout={workout} />
        <MusclesWorked workout={workout} />
      </View>
    </ScrollView>
  );
};
const ExerciseInfo = ({workout}) => {
  let {name} = workout;
  return (
    <View style={styles.section}>
      <Text style={[styles.name]}>{name}</Text>
    </View>
  );
};
const ImgSwiper = ({workout}) => {
  const imgs = workout.images;
  const swiperRef = React.useRef(null);
  return (
    <Swiper
      key={imgs.length}
      controlsProps={{
        dotsTouchable: true,
        prevPos: false,
        nextPos: false,
        dotActiveStyle: {
          backgroundColor: 'red',
        },
      }}
      gesturesEnabled={() => true}>
      {imgs.map((item, idx) => {
        return (
          <View style={[styles.slideContainer]} key={idx + '_swiper'}>
            <Image
              resizeMode="cover"
              source={{
                uri: item,
              }}
              style={styles.img}
            />
          </View>
        );
      })}
    </Swiper>
  );
};
const MusclesWorked = ({workout}) => {
  let {muscles, equipment} = workout;
  return (
    <View style={[styles.section, styles.topBorder]}>
      <Text style={[styles.sectionText]}>MUSCLES WORKED</Text>
      <View style={[styles.muscles]}>
        {muscles.map((muscle, idx) => (
          <Text style={[styles.muscle]} key={idx}>
            {muscle}
          </Text>
        ))}
      </View>
      <Text style={[styles.equipment]}>
        Equipment:
        <Text style={[styles.equipment_l]}>{' ' + equipment}</Text>
      </Text>
    </View>
  );
};

const Instructions = ({workout}) => {
  let {instructions} = workout;
  return (
    <View style={[styles.section, styles.topBorder]}>
      <Text style={[styles.sectionText]}>INSTRUCTIONS</Text>
      <View style={[{}]}>
        {instructions.map((instruction, idx) => (
          <View style={[{flex: 1}]} key={idx}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Text style={[styles.instruction, {marginRight: padding}]}>
                {'\u2022'}
              </Text>
              <Text style={[styles.instruction, {flex: 1}]}>
                {instruction + '\n'}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: Dimensions.get('window').width,
//     minHeight: Dimensions.get('window').height,
//   },
// });
export default Details;
