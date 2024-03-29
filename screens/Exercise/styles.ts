import {StyleSheet} from 'react-native';
import * as theme from '../../shared/theme';

export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
  //Main Scene
  container: {
    flex: 1,
    padding: padding * 3,
    backgroundColor: '#232138',
  },

  musclesContainer: {
    paddingVertical: padding * 2,
    flex: 1,
    paddingTop: padding * 2,
  },

  headline: {
    marginVertical: padding * 3,
  },

  headlineText: {
    fontSize: fontSize.large + 8,
    fontFamily: fontFamily.bold,
    color: color.white,
    textAlign: 'center',
  },

  instructions: {
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.medium,
    color: color.white,
    textAlign: 'center',
    marginTop: padding,
  },

  row: {
    marginHorizontal: -5,
  },

  col: {
    paddingHorizontal: 5,
  },

  //Exercise Scene

  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  section: {
    padding: padding * 2,
  },

  topBorder: {
    borderTopWidth: 1,
    borderTopColor: color.grey,
  },

  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    height: '100%',
    width: '100%',
    backgroundColor: color.light_grey,
  },

  name: {
    fontSize: fontSize.large,
    lineHeight: fontSize.large + 10,
    fontFamily: fontFamily.bold,
    color: color.black,
  },

  equipment: {
    fontSize: fontSize.regular,
    fontFamily: fontFamily.medium,
    color: color.black,
    marginTop: padding / 2,
  },

  equipment_l: {
    color: color.secondary,
  },

  sectionText: {
    fontSize: fontSize.regular,
    fontFamily: fontFamily.bold,
    color: color.grey,
    marginBottom: padding * 1.5,
  },

  muscles: {
    flexDirection: 'row',
  },

  muscle: {
    fontSize: fontSize.regular,
    fontFamily: fontFamily.bold,
    color: color.secondary_font,
    lineHeight: fontSize.small + 5,
    paddingVertical: padding - 2,
    paddingHorizontal: padding,
    marginRight: padding - 2,
    backgroundColor: color.secondary,
    borderRadius: 50,
  },

  instruction: {
    color: color.black,
    fontSize: fontSize.regular + 1,
    lineHeight: fontSize.regular + 8,
    fontFamily: fontFamily.regular,
  },
});

export default styles;
