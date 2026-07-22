import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { PasswordStrength } from "./PasswordStrength";

interface SignupFormProps {
  isDark: boolean;
}

export function SignupForm({ isDark }: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signup, loading: authLoading } = useAuth();
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email format.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLocalLoading(true);
    try {
      await signup(name, email, password);
      setSuccessMessage("Account created successfully.");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      setError("Failed to create account.");
    } finally {
      setLocalLoading(false);
    }
  };

  const isLoading = authLoading || localLoading;

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 animate-in fade-in zoom-in-95 duration-300">
      {error && (
        <div className="text-xs text-red-500 bg-red-500/10 p-2 rounded border border-red-500/20 text-center font-medium">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="text-xs text-green-500 bg-green-500/10 p-2 rounded border border-green-500/20 text-center font-medium">
          {successMessage}
        </div>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="signup-name" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Full Name</Label>
        <Input
          id="signup-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className={`h-9 text-xs border transition-all ${
            isDark 
              ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500 placeholder:text-slate-500' 
              : 'bg-white/50 border-black/10 focus-visible:ring-blue-500 placeholder:text-slate-400'
          }`}
          disabled={isLoading}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="signup-email" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Work Email</Label>
        <Input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@company.com"
          className={`h-9 text-xs border transition-all ${
            isDark 
              ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500 placeholder:text-slate-500' 
              : 'bg-white/50 border-black/10 focus-visible:ring-blue-500 placeholder:text-slate-400'
          }`}
          disabled={isLoading}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="signup-password" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Password</Label>
          <Input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`h-9 text-xs border transition-all ${
              isDark 
                ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500' 
                : 'bg-white/50 border-black/10 focus-visible:ring-blue-500'
            }`}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="signup-confirm" className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Confirm Password</Label>
          <Input
            id="signup-confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`h-9 text-xs border transition-all ${
              isDark 
                ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500' 
                : 'bg-white/50 border-black/10 focus-visible:ring-blue-500'
            }`}
            disabled={isLoading}
          />
        </div>
      </div>
      {password && <PasswordStrength password={password} isDark={isDark} />}
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all text-xs font-semibold mt-4 flex items-center justify-center"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}
