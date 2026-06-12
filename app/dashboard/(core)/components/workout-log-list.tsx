import React from 'react';
import { WorkoutLog } from '../data/dummy';

interface WorkoutLogsListProps {
  workouts: WorkoutLog[];
}

export function WorkoutLogsList({ workouts }: WorkoutLogsListProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Workouts</h3>
      </div>
      <div className="flex flex-col gap-2">
        {workouts.map((workout) => (
          <div key={workout.id} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{workout.workoutName}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">{workout.workoutType} • {workout.durationMinutes} min</span>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-sm font-bold text-red-500">{workout.caloriesBurned} kcal</span>
            </div>
          </div>
        ))}
        {workouts.length === 0 && (
          <div className="text-sm text-zinc-500 py-4 text-center">No workouts logged today.</div>
        )}
      </div>
    </div>
  );
}
