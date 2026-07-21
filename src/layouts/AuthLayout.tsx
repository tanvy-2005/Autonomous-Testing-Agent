import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BrainCircuit,
  Bug,
  Code2,
  Globe,
  Moon,
  Search,
  ShieldAlert,
  Sun,
} from "lucide-react";

const features = [
  { icon: Globe, title: "End-to-End Website Testing" },
  { icon: Code2, title: "Integration & Unit Test Generation" },
  { icon: Search, title: "White Box & Black Box Analysis" },
  { icon: ShieldAlert, title: "Security & Performance Monitoring" },
  { icon: BrainCircuit, title: "AI Root Cause Analysis" },
  { icon: Bug, title: "Automatic Bug Reports & Fix Suggestions" },
];

export default function AuthLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`flex h-[100vh] w-[100vw] overflow-hidden font-sans selection:bg-primary/30 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white"
          : "bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] text-slate-900"
      }`}
    >
      {/* Left Section (50%) */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-8 xl:p-10 relative overflow-hidden border-r border-black/5 dark:border-white/5">
        {/* Subtle decorative glow for left panel */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full ${isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'}`} />
          <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full ${isDark ? 'bg-purple-500/20' : 'bg-purple-400/20'}`} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center">
          <div className="mb-6 flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">ATA</h2>
              <p className={`text-[10px] font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Autonomous Agent</p>
            </div>
          </div>

          <div className="space-y-4 max-w-md">
            <h1 className={`text-3xl xl:text-4xl font-bold tracking-tight leading-[1.15] ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300' : 'text-slate-800'}`}>
              Test. Detect. Fix. Automatically.
            </h1>
            <p className={`text-sm xl:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              AI-powered platform that automatically tests your applications, detects failures, analyzes bugs, and suggests fixes before your users find them.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 max-w-md">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center space-x-3 p-2.5 rounded-xl border transition-colors backdrop-blur-sm group ${
                  isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white/40 border-white/60 hover:bg-white/60'
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                  isDark ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20'
                }`}>
                  <feature.icon className="h-4 w-4" />
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto pt-6">
          <p className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
            Trusted by developers to automate software quality assurance.
          </p>
        </div>
      </div>

      {/* Right Section (50%) */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header containing Logo (mobile) & Theme Toggle */}
        <div className="flex items-center justify-between p-4 lg:p-6 relative z-20">
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-base tracking-tight">ATA</span>
          </div>
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full h-8 w-8 transition-colors ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              }`}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-slate-300" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1 flex items-center justify-center p-4 relative z-10">
          <Outlet context={{ isDark }} />
        </div>
      </div>
    </div>
  );
}
