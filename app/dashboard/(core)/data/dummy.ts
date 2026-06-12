export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
};

export type DailyLog = {
  id: number;
  userId: number;
  logDate: string;
  sleepHours: number;
  waterLiters: number;
  workoutMinutes: number;
  steps: number;
  screenTimeMinutes: number;
  mood: string;
  notes: string;
};

export type MealLog = {
  id: number;
  userId: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  foodName: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatsG: number;
  consumedAt: string;
};

export type WorkoutLog = {
  id: number;
  userId: number;
  workoutName: string;
  durationMinutes: number;
  caloriesBurned: number;
  workoutType: 'cardio' | 'strength' | 'sports' | 'walking' | 'yoga' | 'other';
  performedAt: string;
};

export const currentUser: User = {
  id: 1,
  name: "Alex Johnson",
  phone: "1234567890",
  email: "alex@example.com",
  gender: "other",
  dob: "1990-01-01",
};

export const todayLog: DailyLog = {
  id: 1,
  userId: 1,
  logDate: new Date().toISOString().split('T')[0],
  sleepHours: 7.5,
  waterLiters: 2.2,
  workoutMinutes: 45,
  steps: 8432,
  screenTimeMinutes: 210,
  mood: "Feeling energetic",
  notes: "Good day overall",
};

export const todaysMeals: MealLog[] = [
  {
    id: 1,
    userId: 1,
    mealType: 'breakfast',
    foodName: 'Oatmeal with Berries',
    calories: 350,
    proteinG: 12,
    carbsG: 60,
    fatsG: 6,
    consumedAt: new Date(new Date().setHours(8, 30, 0)).toISOString(),
  },
  {
    id: 2,
    userId: 1,
    mealType: 'lunch',
    foodName: 'Grilled Chicken Salad',
    calories: 450,
    proteinG: 40,
    carbsG: 20,
    fatsG: 22,
    consumedAt: new Date(new Date().setHours(13, 0, 0)).toISOString(),
  },
];

export const todaysWorkouts: WorkoutLog[] = [
  {
    id: 1,
    userId: 1,
    workoutName: 'Morning Run',
    durationMinutes: 30,
    caloriesBurned: 320,
    workoutType: 'cardio',
    performedAt: new Date(new Date().setHours(7, 0, 0)).toISOString(),
  },
  {
    id: 2,
    userId: 1,
    workoutName: 'Core Strength',
    durationMinutes: 15,
    caloriesBurned: 100,
    workoutType: 'strength',
    performedAt: new Date(new Date().setHours(18, 0, 0)).toISOString(),
  }
];
