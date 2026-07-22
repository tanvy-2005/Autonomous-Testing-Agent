import { Link } from "react-router-dom";

interface AuthTabsProps {
  isDark: boolean;
  activeTab: 'login' | 'signup';
}

export function AuthTabs({ isDark, activeTab }: AuthTabsProps) {
  return (
    <div className={`grid w-full grid-cols-2 mb-6 p-1 rounded-lg ${isDark ? 'bg-black/20' : 'bg-black/5'}`}>
      <Link
        to="/login"
        className={`flex items-center justify-center rounded-md transition-all py-1.5 text-xs ${
          activeTab === 'login'
            ? isDark
              ? "bg-white/10 text-white font-semibold shadow-sm"
              : "bg-white text-slate-900 font-semibold shadow-sm"
            : isDark
            ? "hover:bg-white/5 text-slate-400 font-medium"
            : "hover:bg-white/50 text-slate-500 font-medium"
        }`}
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className={`flex items-center justify-center rounded-md transition-all py-1.5 text-xs ${
          activeTab === 'signup'
            ? isDark
              ? "bg-white/10 text-white font-semibold shadow-sm"
              : "bg-white text-slate-900 font-semibold shadow-sm"
            : isDark
            ? "hover:bg-white/5 text-slate-400 font-medium"
            : "hover:bg-white/50 text-slate-500 font-medium"
        }`}
      >
        Sign Up
      </Link>
    </div>
  );
}
