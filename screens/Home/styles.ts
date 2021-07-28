import {StyleSheet} from 'react-native';
import * as theme from '../../shared/theme';
export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
  wrapper: {
    padding: padding,
    paddingVertical: padding * 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },

  img: {
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: color.light_grey,
    marginRight: padding,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: fontSize.large - 5,
    fontFamily: fontFamily.bold,
    color: color.black,
  },

  muscles: {
    flexDirection: 'row',
    marginTop: padding * 2,
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

  accessoryView: {
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: padding / 2,
  },

  accessoryWrapper: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 7,

    width: '100%',
  },
  // main index styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 3,
    height: theme.navbarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.windowWidth,
  },
  tags: {
    height: 50,
    alignItems: 'center',
    width: theme.windowWidth,
    backgroundColor: color.main_light,
    display: 'flex',
    flexDirection: 'row',
  },
  outlineChipTitle: {
    color: color.main,
  },
  activeChip: {
    backgroundColor: color.main,
  },
  outlineChip: {borderColor: color.main},
});

export default styles;
