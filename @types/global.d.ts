import * as theme from '../shared/theme';
type state = {
  data: jsonData;
  theme: typeof theme;
  favorites: workout[];
  updateFav: (fav: workout[]) => void;
};
