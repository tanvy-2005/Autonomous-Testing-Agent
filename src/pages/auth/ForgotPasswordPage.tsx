import { useOutletContext } from "react-router-dom";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
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
        <h2 className="text-2xl font-bold tracking-tight">Reset password</h2>
        <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Enter your email to receive a reset link
        </p>
      </div>

      <ForgotPasswordForm isDark={isDark} />
    </div>
  );
}
