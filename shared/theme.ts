import {Dimensions, Platform} from 'react-native';
import {moderateScale as normalize} from 'react-native-size-matters';
/* 
const color = {
  black: '#1E1611',
  light_black: '#414141',
  main: '#687178',
  main_light: '#D3D6D9',
  secondary: '#83DE02',
  secondary_font: '#535B65',
  white: '#fff',
  light_grey: '#eaeaea',
  grey: '#ccc',
  red: 'red',
  underlayColor: '#ddd',
}; */
const color = {
  black: '#1E1611',
  light_black: '#414141',
  main: '#d90429',
  main_light: '#edf2f4',
  secondary: '#ef233c',
  secondary_font: '#edf2f4',
  white: '#edf2f4',
  light_grey: '#eaeaea',
  grey: '#ccc',
  red: 'red',
  underlayColor: '#ddd',
};
const fontSize = {
  small: normalize(12),
  regular: normalize(14),
  large: normalize(21),
  extralarge: normalize(28),
};

const helvetica = {
  bold: 'HelveticaNeue-Bold',
  medium: 'HelveticaNeue-Medium',
  regular: 'Helvetica Neue',
  light: 'HelveticaNeue-Light',
};

const fontFamily = helvetica;

const padding = 8;
const navbarHeight = Platform.OS === 'ios' ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = Platform.OS === 'ios' ? '#fff' : '#fff';

const tabIconStyle = {size: 19, color: tabColor, selected: color.secondary};
const navTitleStyle = {
  fontSize: fontSize.regular + 1,
  fontFamily: fontFamily.medium,
  color: color.white,
  letterSpacing: 0.4,
};
const navigationBarStyle = {backgroundColor: color.main, borderBottomWidth: 0};

export {
  color,
  fontSize,
  fontFamily,
  padding,
  navbarHeight,
  windowWidth,
  windowHeight,
  tabIconStyle,
  navTitleStyle,
  navigationBarStyle,
};
