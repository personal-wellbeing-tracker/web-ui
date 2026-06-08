'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../providers/auth-provider';

const navItems = [
  { href: '/#features', label: 'Features' },
  { href: '/#privacy', label: 'Privacy' },
];

export default function TopNavigation() {
  const { user, logout, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const avatarLetter =
    user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() ||
    'U';

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
              W
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:font-semibold hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {!loading && user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-full p-1 hover:bg-slate-100 transition"
            >
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {avatarLetter}
                </div>
              )}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <div className="border-b border-slate-100 p-4">
                  <p className="font-medium text-slate-900">
                    {user.name || 'User'}
                  </p>
                  <p className="text-sm text-slate-500 truncate">
                    {user.email}
                  </p>
                </div>

                <div className="p-2">
                  <Link
                    href="/dashboard"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
                    onClick={() => {
                      setOpen(false);
                      logout();
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : !loading ? (
          <Link
            href="/login"
            className="inline-flex items-center rounded-lg bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Sign In
          </Link>
        ) : (
          <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
        )}
      </nav>
    </header>
  );
}