import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox"; // We might need to add this component, or just use native if not available.
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

export default function AuthPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeTab, setActiveTab] = useState("signin");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground font-sans selection:bg-primary/30">
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

      {/* Right Section - Auth Form */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-50 dark:bg-background">
        {/* Subtle right side background effect */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
           <div className="absolute top-[20%] right-[-20%] w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full dark:bg-blue-600/10" />
        </div>

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

        <div className="flex-1 flex items-center justify-center p-6 relative z-10">
          <div className="w-full max-w-[420px] space-y-8">
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                {activeTab === "signin" ? "Welcome back" : "Create an account"}
              </h2>
              <p className="text-muted-foreground text-sm">
                {activeTab === "signin"
                  ? "Enter your credentials to access your workspace"
                  : "Start automating your QA workflow today"}
              </p>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-200/50 dark:bg-white/5 p-1 rounded-xl">
                <TabsTrigger value="signin" className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-white/10 data-[state=active]:shadow-sm transition-all">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-white/10 data-[state=active]:shadow-sm transition-all">Sign Up</TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                <Button variant="outline" className="w-full relative h-11 bg-white dark:bg-transparent border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full relative h-11 bg-white dark:bg-transparent border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200 dark:border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-50 dark:bg-background px-2 text-muted-foreground font-medium tracking-wider">
                    Or continue with email
                  </span>
                </div>
              </div>

              <TabsContent value="signin" className="m-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="name@example.com"
                    className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="signin-password">Password</Label>
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="signin-password"
                    type="password"
                    className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-1 pb-3">
                  <Checkbox id="remember" className="border-slate-300 dark:border-white/20 data-[state=checked]:bg-blue-600" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400"
                  >
                    Remember me for 30 days
                  </label>
                </div>
                <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all text-base font-medium">
                  Sign In
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  Don't have an account?{" "}
                  <button onClick={() => setActiveTab("signup")} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Sign Up
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="m-0 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Work Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@company.com"
                    className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm</Label>
                    <Input
                      id="signup-confirm"
                      type="password"
                      className="h-11 bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 focus-visible:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all text-base font-medium mt-6">
                  Create Account
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-4">
                  Already have an account?{" "}
                  <button onClick={() => setActiveTab("signin")} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Sign In
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
