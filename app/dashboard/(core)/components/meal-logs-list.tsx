import React from 'react';
import { MealLog } from '../data/dummy';

interface MealLogsListProps {
  meals: MealLog[];
}

export function MealLogsList({ meals }: MealLogsListProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Meals</h3>
      </div>
      <div className="flex flex-col gap-2">
        {meals.map((meal) => (
          <div key={meal.id} className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{meal.foodName}</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">{meal.mealType}</span>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-sm font-bold text-zinc-900 dark:text-white">{meal.calories} kcal</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                P: {meal.proteinG}g • C: {meal.carbsG}g • F: {meal.fatsG}g
              </span>
            </div>
          </div>
        ))}
        {meals.length === 0 && (
          <div className="text-sm text-zinc-500 py-4 text-center">No meals logged today.</div>
        )}
      </div>
    </div>
  );
}
