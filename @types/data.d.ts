type muscle =
  | 'All'
  | 'Biceps'
  | 'Deltoids'
  | 'Triceps'
  | 'Chest'
  | 'Abdominals'
  | 'Hamstrings'
  | 'Quadriceps'
  | string;
type workout = {
  id: number;
  name: string;
  images: string[];
  instructions: string[];
  muscles: muscle[];
  equipment: string;
  muscle_diagram: string;
};
type jsonData = {
  chest: workout[];
  arms: workout[];
  abs: workout[];
  legs: workout[];
};
