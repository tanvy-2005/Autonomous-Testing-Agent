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

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Left Section - Hero Panel (Hidden on Mobile) */}
      <div className="hidden lg:flex w-[45%] flex-col justify-between p-12 bg-black dark:bg-[#030712] relative overflow-hidden border-r border-border/50">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-cyan-600/10 blur-[100px] rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-center text-white">
          <div className="mb-12 flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">ATA</h2>
              <p className="text-xs text-slate-400 font-medium">Autonomous Testing Agent</p>
            </div>
          </div>

          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
              Test. Detect. Fix. Automatically.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              AI-powered platform that automatically tests your applications, detects failures, analyzes bugs, and suggests fixes before your users find them.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 max-w-lg">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto pt-12">
          <p className="text-sm text-slate-500 font-medium">
            Trusted by developers to automate software quality assurance.
          </p>
        </div>
      </div>

      {/* Right Section - Auth Wrapper */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-50 dark:bg-background">
        {/* Subtle right side background effect */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
           <div className="absolute top-[20%] right-[-20%] w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full dark:bg-blue-600/10" />
        </div>

        {/* Header containing Logo (mobile) & Theme Toggle */}
        <div className="flex items-center justify-between p-6 lg:p-12 relative z-10">
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">ATA</span>
          </div>
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-slate-600" />
              ) : (
                <Sun className="h-5 w-5 text-slate-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1 flex items-center justify-center p-6 relative z-10 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
