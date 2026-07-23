import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import AuthLayout from "@/components/layout/AuthLayout";

export default function VerifyEmailPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { verifyEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useAuth();
  const isDark = theme === 'dark';
  
  // We expect the email to be passed via router state from the signup page
  const email = location.state?.email;

  if (!email) {
    // If accessed directly without an email in state, go back to signup
    navigate("/signup");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (code.length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }

    setLoading(true);
    try {
      await verifyEmail(email, code);
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Invalid or expired verification code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-500">
      <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center shadow-lg transition-colors ${
        success 
          ? "bg-green-500/20 text-green-500 shadow-green-500/20" 
          : isDark 
            ? "bg-blue-500/20 text-blue-400 shadow-blue-500/20"
            : "bg-blue-100 text-blue-600 shadow-blue-200"
      }`}>
        {success ? <CheckCircle2 className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
      </div>
      
      <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Verify your email
      </h2>
      <p className={`text-sm text-center mb-8 max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        We sent a 6-digit verification code to <span className="font-semibold text-blue-500">{email}</span>. Please enter it below.
      </p>

      {success ? (
        <div className="text-sm text-green-500 bg-green-500/10 p-3 rounded-lg border border-green-500/20 text-center font-medium w-full max-w-sm">
          Email verified successfully! Redirecting...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          {error && (
            <div className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center font-medium">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <Input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="000000"
              className={`h-12 text-center text-2xl tracking-widest font-mono border transition-all ${
                isDark 
                  ? 'bg-black/20 border-white/10 focus-visible:ring-blue-500 placeholder:text-slate-700' 
                  : 'bg-white/50 border-black/10 focus-visible:ring-blue-500 placeholder:text-slate-300'
              }`}
              disabled={loading}
              autoFocus
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading || code.length !== 6}
            className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all text-sm font-semibold flex items-center justify-center rounded-lg"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Verifying..." : "Verify Account"}
          </Button>
          
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={`text-xs hover:underline transition-colors ${
                isDark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Skip for now
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
