'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface AuthData {
  access_token: string;
  user: UserProfile;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  login: (token: string, user: UserProfile) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => { },
  logout: () => { },
  loading: true,
});

const STORAGE_KEY = 'wellbeing_auth';

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const auth: AuthData = JSON.parse(stored);

        setToken(auth.access_token);
        setUser(auth.user);
      }
    } catch (err) {
      console.error('Failed to restore auth state:', err);
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (accessToken: string, userProfile: UserProfile) => {
    const authData: AuthData = {
      access_token: accessToken,
      user: userProfile,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));

    setToken(accessToken);
    setUser(userProfile);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}