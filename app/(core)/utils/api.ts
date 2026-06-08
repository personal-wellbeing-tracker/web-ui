const getAuthHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('wellbeing_jwt');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

interface FetchOptions extends RequestInit {
  // Add any custom options here if needed later
}

/**
 * A wrapper around the native `fetch` that automatically injects the JWT token
 * from localStorage into the Authorization header.
 */
export const fetchApi = async (endpoint: string, options: FetchOptions = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;

  const headers = {
    ...getAuthHeaders(),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
};
