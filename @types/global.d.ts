import * as theme from '../shared/theme';
type state = {
  workouts: workout[];
  theme: typeof theme;
  favorites: workout[];
  updateFav: (fav: workout[]) => void;
};
