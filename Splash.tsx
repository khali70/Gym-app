import React from 'react';
import {View, StatusBar, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import * as theme from './shared/theme';
import SplashScreen from 'react-native-splash-screen';

type SplashProps = {
  setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};
const Splash: React.FC<SplashProps> = ({setEndAnimation}) => {
  const progress = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.color.main,
      }}>
      <StatusBar backgroundColor={theme.color.main} barStyle="light-content" />
      <LottieView
        source={require('./assets/animation/dumble-animation.json')}
        autoPlay
        loop={false}
        style={{
          transform: [{scale: 0.75}],
        }}
        onAnimationFinish={() => setEndAnimation(false)}
        progress={progress}
      />
    </View>
  );
};
export default Splash;
