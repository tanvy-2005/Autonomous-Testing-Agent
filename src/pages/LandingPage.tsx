import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Bot,
  BrainCircuit,
  Code2,
  Globe,
  Search,
  ShieldAlert,
  Zap,
  Activity,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lock,
  LineChart,
  PlayCircle,
  Menu,
  X,
  Moon,
  Sun
} from "lucide-react";

// --- Components ---

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-[#020617]/70 backdrop-blur-md border-b border-black/5 dark:border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight dark:text-white text-slate-900">ATA</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Solutions", "Pricing", "Documentation"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6 dark:text-white text-slate-900" /> : <Menu className="h-6 w-6 dark:text-white text-slate-900" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#020617] border-b border-black/5 dark:border-white/10 p-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {["Features", "Solutions", "Pricing", "Documentation"].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            {["Test.", "Detect.", "Fix."].map((word, i) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-5xl sm:text-7xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                {word}
              </motion.h1>
            ))}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >
              Automatically.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl dark:text-slate-400 text-slate-600 max-w-lg leading-relaxed font-medium"
          >
            AI-powered autonomous testing platform that discovers bugs, analyzes failures, and recommends fixes before users find them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/signup">
              <Button className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all hover:-translate-y-1">
                Start Testing Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-[500px] hidden lg:block">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] w-72 p-4 rounded-2xl dark:bg-white/5 bg-white/60 backdrop-blur-xl border dark:border-white/10 border-slate-200 shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">Running Login Tests...</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full dark:bg-white/10 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[65%]" />
              </div>
              <p className="text-xs dark:text-slate-500 text-slate-400">12/18 assertions passed</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute top-[45%] left-[0%] w-72 p-4 rounded-2xl dark:bg-[#1e1b4b]/80 bg-red-50 backdrop-blur-xl border dark:border-red-500/20 border-red-200 shadow-2xl"
          >
            <div className="flex items-start space-x-3">
              <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold dark:text-red-400 text-red-600 block">Authentication Failed</span>
                <span className="text-xs dark:text-red-300/70 text-red-500/80 mt-1 block">Expected 200 OK, got 401 Unauthorized at /api/login. AI suggests checking JWT token expiration logic.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] right-[20%] w-64 p-4 rounded-2xl dark:bg-white/5 bg-white/60 backdrop-blur-xl border dark:border-white/10 border-slate-200 shadow-2xl flex items-center space-x-4"
          >
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-green-500/20 text-green-500">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold dark:text-white text-slate-900">Lighthouse Score</p>
              <p className="text-2xl font-extrabold text-green-500">98</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "1M+", label: "Tests Executed" },
    { value: "100K+", label: "Bugs Detected" },
    { value: "99.9%", label: "Reliability" },
    { value: "500+", label: "Teams" },
  ];

  return (
    <section className="py-20 border-y dark:border-white/5 border-slate-200 dark:bg-black/20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-purple-500 mb-2">
              {stat.value}
            </h3>
            <p className="text-sm font-medium dark:text-slate-400 text-slate-600 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { icon: Globe, title: "1. Add Website URL", desc: "Point ATA to your staging or production environment." },
    { icon: Search, title: "2. AI Discovers Application", desc: "ATA automatically crawls and maps all user flows and API routes." },
    { icon: Activity, title: "3. Autonomous Testing", desc: "Generates and runs thousands of E2E, integration, and unit tests." },
    { icon: ShieldAlert, title: "4. Reports & Fixes", desc: "Delivers a beautiful dashboard with pinpointed errors and AI-generated code fixes." },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white text-slate-900">How It Works</h2>
          <p className="dark:text-slate-400 text-slate-600">Zero configuration setup. Let the AI do the heavy lifting.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center w-full"
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 dark:border-[#020617] border-white dark:bg-blue-900/50 bg-blue-100 text-blue-500 shadow-lg z-10">
                <step.icon className="h-5 w-5" />
              </div>
              
              <div className={`w-[calc(100%-4rem)] ml-auto md:w-[calc(50%-3rem)] p-6 rounded-2xl dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 shadow-xl transition-all hover:-translate-y-1 ${
                i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto"
              }`}>
                <h3 className="font-bold text-lg mb-1 dark:text-white text-slate-900">{step.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { icon: BrainCircuit, title: "AI Root Cause Analysis" },
    { icon: Code2, title: "Unit Testing" },
    { icon: Globe, title: "Integration Testing" },
    { icon: Search, title: "End-to-End Testing" },
    { icon: Zap, title: "Performance Testing" },
    { icon: Lock, title: "Security Testing" },
    { icon: Activity, title: "Accessibility Testing" },
    { icon: LineChart, title: "Beautiful Reports" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white text-slate-900">Enterprise-Grade Features</h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">Everything you need to ensure your software is bulletproof, powered by state-of-the-art LLMs.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl dark:bg-white/5 bg-white/60 backdrop-blur-sm border dark:border-white/10 border-slate-200 flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full dark:bg-white/10 bg-blue-50 flex items-center justify-center mb-4 text-blue-500 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-all">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base dark:text-slate-200 text-slate-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TerminalSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border dark:border-white/10 border-slate-300 shadow-2xl bg-[#0d1117]"
        >
          <div className="h-12 bg-[#161b22] border-b border-white/10 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="ml-4 text-xs text-slate-400 font-mono">bash</div>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-slate-300 leading-relaxed min-h-[300px]">
            <p className="flex items-center text-blue-400">
              <span className="text-green-400 mr-2">➜</span> ~ ata scan https://myapp.com
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-slate-400">Scanning routes...</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-400">Testing authentication flows...</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-400">Running accessibility checks...</motion.p>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-400 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" /> 18 potential issues detected
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" /> AI fix suggestions generated
              </motion.p>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center">
                <span className="text-green-400 mr-2">➜</span> ~ <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-5 bg-white inline-block ml-1 align-middle" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-900/20" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-8 dark:text-white text-slate-900"
        >
          Ready to automate your testing?
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/signup">
            <Button className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
              Start Testing Free
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t dark:border-white/10 border-slate-200 bg-slate-50 dark:bg-[#020617] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight dark:text-white text-slate-900">ATA</span>
          </div>
          <p className="dark:text-slate-400 text-slate-600 text-sm max-w-xs">
            The next-generation AI developer platform for autonomous QA testing and bug resolution.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 dark:text-white text-slate-900">Product</h4>
          <ul className="space-y-2 text-sm dark:text-slate-400 text-slate-600">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 dark:text-white text-slate-900">Resources</h4>
          <ul className="space-y-2 text-sm dark:text-slate-400 text-slate-600">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 dark:text-white text-slate-900">Legal</h4>
          <ul className="space-y-2 text-sm dark:text-slate-400 text-slate-600">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t dark:border-white/10 border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm dark:text-slate-500 text-slate-400">
        <p>© 2026 Autonomous Testing Agent. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
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
    <div className={`min-h-screen font-sans transition-colors duration-500 ${theme === 'dark' ? 'bg-[#020617] text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full transition-colors duration-1000 ${theme === 'dark' ? 'bg-blue-600/15' : 'bg-blue-400/20'}`} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full transition-colors duration-1000 ${theme === 'dark' ? 'bg-purple-600/15' : 'bg-purple-400/20'}`} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Timeline />
        <Features />
        <TerminalSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
