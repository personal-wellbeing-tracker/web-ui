import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

export function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-5 shadow-sm flex items-start gap-4">
      {icon && (
        <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl text-zinc-500 dark:text-zinc-400">
          {icon}
        </div>
      )}
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</span>
          {subtitle && (
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
}
