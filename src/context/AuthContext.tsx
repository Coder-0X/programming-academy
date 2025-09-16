import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Custom JWT decode (base64) to avoid external default import issues
function decodeToken<T = any>(token: string): T | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const json = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export interface User {
  name: string;
  picture?: string;
  email?: string;
  sub: string;
}

interface AuthContextType {
  user: User | null;
  setAuthToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setAuthToken: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      const decoded = decodeToken<User>(token);
      setUser(decoded);
    }
  }, []);

  const setAuthToken = (token: string) => {
    Cookies.set('auth_token', token, { expires: 7 });
    const decoded = decodeToken<User>(token);
    setUser(decoded);
  };

  const logout = () => {
    Cookies.remove('auth_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
