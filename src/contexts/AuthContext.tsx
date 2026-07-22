import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
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

  const login = async (email: string, _password: string, remember: boolean) => {
    // TODO: implement real backend login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: '1', name: 'Tanvy', email, avatar: 'https://github.com/shadcn.png' };
        const mockToken = 'mock-jwt-token';
        
        setUser(mockUser);
        setToken(mockToken);
        setRememberMe(remember);
        
        if (remember) {
          localStorage.setItem('user', JSON.stringify(mockUser));
          localStorage.setItem('token', mockToken);
          localStorage.setItem('rememberMe', 'true');
        }
        resolve();
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, _password: string) => {
    // TODO: implement real backend signup
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: '1', name, email, avatar: 'https://github.com/shadcn.png' };
        const mockToken = 'mock-jwt-token';
        
        setUser(mockUser);
        setToken(mockToken);
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('token', mockToken);
        resolve();
      }, 1000);
    });
  };

  const googleLogin = async () => {
    // TODO: implement google login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = { id: '1', name: 'Tanvy (Google)', email: 'user@google.com', avatar: 'https://github.com/shadcn.png' };
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
        const mockUser = { id: '1', name: 'Tanvy (GitHub)', email: 'user@github.com', avatar: 'https://github.com/shadcn.png' };
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

  const forgotPassword = async (_email: string) => {
    // TODO: implement real forgot password
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
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
