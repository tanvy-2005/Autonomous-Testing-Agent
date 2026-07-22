import { useOutletContext } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialLoginButtons } from "@/components/auth/SocialLoginButtons";
import { AuthTabs } from "@/components/auth/AuthTabs";

export default function Login() {
  const { isDark } = useOutletContext<{ isDark: boolean }>();

  return (
    <div
      className={`w-full max-w-[360px] p-6 rounded-3xl backdrop-blur-xl border shadow-2xl transition-all duration-300 hover:shadow-blue-500/10 ${
        isDark
          ? "bg-white/5 border-white/10 text-white"
          : "bg-white/60 border-white/60 text-slate-900"
      }`}
    >
      <div className="text-center mb-5 space-y-1.5">
        <h2 className="text-2xl font-bold tracking-tight">Welcome back</h2>
        <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Enter your credentials to access your workspace
        </p>
      </div>

      <AuthTabs isDark={isDark} activeTab="login" />
      
      <SocialLoginButtons isDark={isDark} />

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className={`w-full border-t ${isDark ? 'border-white/10' : 'border-black/10'}`} />
        </div>
        <div className="relative flex justify-center text-[10px] uppercase font-semibold">
          <span className={`px-2 ${isDark ? 'bg-[#0b1328] text-slate-400' : 'bg-[#e4effb] text-slate-500'}`}>
            Or continue with email
          </span>
        </div>
      </div>

      <LoginForm isDark={isDark} />
    </div>
  );
}
