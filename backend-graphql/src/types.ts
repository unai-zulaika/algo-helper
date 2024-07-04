export interface UserSettings {
  theme: string;
  notifications: boolean;
}

export interface ExerciseData {
  title: string;
  description: string;
}

// Define the types for the database rows
export interface AlgoUser {
  id: number;
  username: string;
  email: string;
  settings: UserSettings;
}

export interface Exercise {
  id: number;
  name: string;
  exercisedata: ExerciseData;
}

export interface UserExercise {
  user_id: number;
  exercise_id: number;
}
