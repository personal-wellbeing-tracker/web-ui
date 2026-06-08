'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth, UserProfile } from '../(core)/providers/auth-provider';

// Extend window interface for Google Identity Services SDK
declare global {
  interface Window {
    google?: any;
  }
}

export default function LoginPage() {
  const { user, login, loading } = useAuth();
  const router = useRouter();
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ text: string; type: 'info' | 'success' | 'error' } | null>(null);

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  // Handle OAuth Credential callback from Google
  const handleCredentialResponse = async (response: any) => {
    setIsAuthenticating(true);
    setStatusMsg({
      text: 'Processing login request...',
      type: 'info',
    });

    const googleToken = response.credential;

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

      const res = await fetch(`${backendUrl}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: googleToken,
        }),
      });

      if (!res.ok) {
        throw new Error(`Authentication failed (${res.status})`);
      }

      const data = await res.json();

      if (!data.access_token || !data.user) {
        throw new Error('Invalid auth response');
      }

      login(data.access_token, data.user);

      setStatusMsg({
        text: 'Logged in successfully!',
        type: 'success',
      });

      router.push('/');
    } catch (error) {
      console.error(error);

      setStatusMsg({
        text: 'Authentication failed.',
        type: 'error',
      });
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Initialize Google Sign-in button
  const initGoogleSignIn = () => {
    if (typeof window !== 'undefined' && window.google && !user) {
      try {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '1234567890-mockclientid.apps.googleusercontent.com';

        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });

        const btnElement = document.getElementById('google-signin-btn');
        if (btnElement) {
          window.google.accounts.id.renderButton(btnElement, {
            theme: 'outline',
            size: 'large',
            width: 320,
            text: 'signin_with',
            shape: 'pill',
          });
        }
      } catch (err) {
        console.error('Failed to initialize Google Sign-in button:', err);
      }
    }
  };

  // Run initializations after mounting or script loads
  useEffect(() => {
    if (window.google) {
      initGoogleSignIn();
    }
  }, [user]);

  if (loading || user) {
    return (
      <main className="relative flex flex-1 flex-col items-center justify-center min-h-[80vh] bg-white">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-950" />
          <span className="text-xs text-slate-500">Redirecting...</span>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Load Google Client SDK */}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={initGoogleSignIn}
      />

      <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 min-h-[80vh] bg-white">
        <div className="w-full max-w-md">
          {/* Back to Home link */}
          <div className="mb-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
            >
              ← Back to landing page
            </Link>
          </div>

          {/* Login Card Container */}
          <div className="rounded-lg border border-slate-200 bg-white p-8 transition duration-300">

            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-base font-bold text-white mb-4">
                W
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-slate-950">
                Sign in to Wellbeing AI
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Connect your account to track your daily rhythm.
              </p>
            </div>

            {/* Logged Out View */}
            <div className="flex flex-col items-center justify-center py-4">

              {/* Button Container */}
              <div className="min-h-[50px] w-full flex flex-col items-center justify-center">
                {isAuthenticating ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-950" />
                    <span className="text-xs text-slate-500">Connecting...</span>
                  </div>
                ) : (
                  <div id="google-signin-btn" className="flex justify-center" />
                )}
              </div>

              <div className="mt-8 text-center border-t border-slate-200/50 pt-6 w-full">
                <p className="text-xs text-slate-400 leading-normal">
                  By signing in, you authorize Google to share your profile name, email, and photo securely with Wellbeing AI.
                </p>
              </div>
            </div>

            {/* Status Notifications */}
            {statusMsg && (
              <div
                className={`mt-4 rounded-xl px-4 py-3 text-xs leading-normal font-medium border text-center ${statusMsg.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                  : statusMsg.type === 'error'
                    ? 'bg-rose-50 text-rose-800 border-rose-100'
                    : 'bg-blue-50 text-blue-800 border-blue-100'
                  }`}
              >
                {statusMsg.text}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
