import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  is_verified?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  theme: 'light' | 'dark';
  rememberMe: boolean;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  githubLogin: () => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  setTheme: (theme: 'light' | 'dark') => void;
  setRememberMe: (remember: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize from local storage or mock
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const storedRemember = localStorage.getItem('rememberMe') === 'true';

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setRememberMe(storedRemember);
    setLoading(false);
  }, []);

  const API_URL = 'http://127.0.0.1:8000/api/v1';

  const login = async (email: string, password: string, remember: boolean) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Login failed');
      }
      
      const data = await response.json();
      setUser(data.user);
      setToken(data.token);
      setRememberMe(remember);
      
      if (remember) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('rememberMe', 'true');
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Signup failed');
      }
      // Instead of auto-login, we let the UI redirect to verify-email
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const googleLogin = async () => {
    // TODO: implement google login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: '1', name: 'Tanvy (Google)', email: 'user@google.com', avatar: 'https://lh3.googleusercontent.com/a/default-user=s64-c' };
        setUser(mockUser);
        setToken('mock-google-token');
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('token', 'mock-google-token');
        resolve();
      }, 1000);
    });
  };

  const githubLogin = async () => {
    // TODO: implement github login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: '1', name: 'Tanvy (GitHub)', email: 'user@github.com', avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' };
        setUser(mockUser);
        setToken('mock-github-token');
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('token', 'mock-github-token');
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/forgot-password?email=${encodeURIComponent(email)}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to send recovery email');
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      throw error;
    }
  };

  const verifyEmail = async (email: string, code: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Verification failed');
      }
      
      // Update local user state
      if (user && user.email === email) {
        const updatedUser = { ...user, is_verified: true };
        setUser(updatedUser);
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      }
    } catch (error) {
      console.error("Verification error:", error);
      throw error;
    }
  };

  const handleSetTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSetRememberMe = (remember: boolean) => {
    setRememberMe(remember);
    localStorage.setItem('rememberMe', String(remember));
  }

  const value = {
    user,
    token,
    theme,
    rememberMe,
    loading,
    isAuthenticated: !!user && !!token,
    login,
    signup,
    googleLogin,
    githubLogin,
    logout,
    forgotPassword,
    verifyEmail,
    setTheme: handleSetTheme,
    setRememberMe: handleSetRememberMe
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
