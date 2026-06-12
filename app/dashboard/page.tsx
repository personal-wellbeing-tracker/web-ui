import { StatCard } from './(core)/components/stat-card';
import { MealLogsList } from './(core)/components/meal-logs-list';
import { WorkoutLogsList } from './(core)/components/workout-log-list';
import { currentUser, todayLog, todaysMeals, todaysWorkouts } from './(core)/data/dummy';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between pb-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back, {currentUser.name.split(' ')[0]}</h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Here is your wellbeing overview for {todayLog.logDate}</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-full px-4 py-2 shadow-sm text-sm font-medium">
                    Mood: {todayLog.mood}
                </div>
            </header>

            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard
                        title="Sleep"
                        value={`${todayLog.sleepHours}h`}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" /></svg>
                        }
                    />
                    <StatCard
                        title="Water"
                        value={`${todayLog.waterLiters}L`}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                        }
                    />
                    <StatCard
                        title="Steps"
                        value={todayLog.steps.toLocaleString()}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 14 6.7-2.3c.8-.3 1.3-1.1 1.3-2v0c0-.9-.5-1.7-1.3-2l-3.2-1.1c-2.4-.8-5.1-.1-6.9 1.8l-1.4 1.4" /><path d="m13 14-4.6 4.6c-1.3 1.3-3.4 1-4.3-.6v0c-.8-1.5.3-3.3 1.9-3.3h2.1l1.5-1.5" /></svg>
                        }
                    />
                    <StatCard
                        title="Screen Time"
                        value={`${Math.floor(todayLog.screenTimeMinutes / 60)}h ${todayLog.screenTimeMinutes % 60}m`}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                        }
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <MealLogsList meals={todaysMeals} />
                    <WorkoutLogsList workouts={todaysWorkouts} />
                </div>
            </main>
        </div>
    );
}
