type workout = {
  id: number;
  name: string;
  images: string[];
  instructions: string[];
  muscles: string[];
  equipment: string;
  muscle_diagram: string;
};
type Data = {
  chest: workout[];
  arms: workout[];
  abs: workout[];
  legs: workout[];
};
