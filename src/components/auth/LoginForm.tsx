import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  isDark: boolean;
}

export function LoginForm({ isDark }: LoginFormProps) {
  const [email, setEmail] = useState(() => sessionStorage.getItem('auth_email') || "");
  const [password, setPassword] = useState(() => sessionStorage.getItem('auth_password') || "");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading: authLoading } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (val: string) => { setEmail(val); sessionStorage.setItem('auth_email', val); if (error) setError(""); };
  const handlePasswordChange = (val: string) => { setPassword(val); sessionStorage.setItem('auth_password', val); if (error) setError(""); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLocalLoading(true);
    try {
      await login(email, password, remember);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to sign in.");
    } finally {
      setLocalLoading(false);
    }
  };

  const isLoading = authLoading || localLoading;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
      {error && (
        <div className="text-xs text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20 text-center font-medium">
          {error}
        </div>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="signin-email" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email</Label>
        <Input
          id="signin-email"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="name@example.com"
          className={`h-9 text-xs border transition-all ${
            isDark 
              ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500 placeholder:text-slate-500' 
              : 'bg-white/50 border-black/10 focus-visible:ring-blue-500 placeholder:text-slate-400'
          }`}
          disabled={isLoading}
          autoComplete="email"
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="signin-password" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Password</Label>
          <Link to="/forgot-password" className={`text-[11px] font-medium hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="signin-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className={`h-9 pr-9 text-xs border transition-all ${
              isDark 
                ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500' 
                : 'bg-white/50 border-black/10 focus-visible:ring-blue-500'
            }`}
            disabled={isLoading}
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 pt-0.5 pb-2">
        <Checkbox 
          id="remember" 
          checked={remember}
          onCheckedChange={(checked) => setRemember(checked as boolean)}
          className={`h-3.5 w-3.5 border data-[state=checked]:bg-blue-600 ${isDark ? 'border-white/20' : 'border-black/20'}`} 
          disabled={isLoading}
        />
        <label
          htmlFor="remember"
          className={`text-[11px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Remember me for 30 days
        </label>
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all text-xs font-semibold flex items-center justify-center"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
