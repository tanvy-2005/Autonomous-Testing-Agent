import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Moon,
  Sun,
  CheckCircle2,
  Zap,
  SearchCode,
  Activity,
  ShieldAlert,
  ChevronRight,
  Sparkles,
  Play,
  Code2,
  Star
} from "lucide-react";

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
        scrolled 
          ? "py-3 bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm" 
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
            <ShieldAlert className="relative h-5 w-5 text-white z-10" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 hidden sm:inline-block">
            ATA
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
          {["Features", "How it Works", "Testimonials"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link to="/login" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Log in
          </Link>
          <Link to="/signup">
            <Button className="h-10 px-6 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm shadow-lg shadow-slate-900/20 dark:shadow-white/10 transition-all hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </Link>
        </div>

        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              {["Features", "How it Works", "Testimonials"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-base font-semibold text-slate-700 dark:text-slate-200 p-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-3">
                <Link to="/login">
                  <Button variant="outline" className="w-full h-11 rounded-xl font-semibold">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#09090b]">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-30 dark:opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-8 border border-indigo-200 dark:border-indigo-500/20 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Introducing ATA 2.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8"
        >
          Stop Writing Tests. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Start Shipping Features.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Autonomous Testing Agent (ATA) writes, executes, and self-heals end-to-end tests for your entire application. Ship faster with zero bugs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link to="/signup" className="w-full sm:w-auto">
            <Button className="w-full h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 group">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full font-bold text-base bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all text-slate-700 dark:text-slate-200">
            <Code2 className="mr-2 w-5 h-5" />
            View Documentation
          </Button>
        </motion.div>
      </div>

      {/* Hero Workspace Image / Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        className="mt-24 max-w-6xl mx-auto relative z-10"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-[#09090b] z-20 pointer-events-none h-full w-full bottom-0" style={{ top: '70%' }} />
        
        <div 
          className="rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/50 dark:bg-[#09090b]/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] ring-1 ring-white/20 dark:ring-white/10 transition-transform duration-700 ease-out origin-bottom hover:scale-[1.02]"
          style={{ transform: "rotateX(5deg)" }}
        >
          {/* Mockup Header */}
          <div className="h-14 border-b border-slate-200/50 dark:border-white/10 flex items-center px-6 bg-slate-50/50 dark:bg-white/5 justify-between backdrop-blur-md">
            <div className="flex space-x-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 shadow-sm" />
            </div>
            <div className="flex items-center space-x-4 bg-white/50 dark:bg-black/50 px-4 py-1.5 rounded-full border border-slate-200/50 dark:border-white/5 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">ata-workspace.dev</span>
            </div>
          </div>
          
          {/* Mockup Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-72 border-r border-slate-200/50 dark:border-white/5 bg-slate-50/30 dark:bg-black/20 p-5 hidden md:block">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center">
                    <SearchCode className="w-4 h-4 mr-2" />
                    Test Suites
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Authentication Flow', status: 'pass' },
                      { name: 'Checkout Process', status: 'fail' },
                      { name: 'User Settings', status: 'pass' },
                      { name: 'API Endpoints', status: 'pass' }
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between text-sm p-3 rounded-xl transition-all ${item.status === 'fail' ? 'bg-rose-50/80 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 font-semibold shadow-sm border border-rose-100 dark:border-rose-500/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-white/5 cursor-pointer'}`}>
                        <div className="flex items-center space-x-3">
                          {item.status === 'fail' ? <X className="w-4 h-4 text-rose-500" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                          <span>{item.name}</span>
                        </div>
                        {item.status === 'fail' && <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10 bg-white/30 dark:bg-transparent overflow-y-auto relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center tracking-tight">
                    Checkout Process
                    <span className="ml-4 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-200 dark:border-rose-500/20">Failed</span>
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 flex items-center">
                    Failed 2 minutes ago on branch <span className="ml-2 font-mono bg-slate-200/50 dark:bg-white/10 px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-white/5">feature/new-cart</span>
                  </p>
                </div>
                <Button className="h-10 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 shadow-sm font-semibold">
                  <Play className="w-4 h-4 mr-2" />
                  Rerun Test
                </Button>
              </div>

              <div className="rounded-2xl border border-rose-200/80 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 p-6 mb-8 relative z-10 backdrop-blur-sm shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center shrink-0 border border-rose-200 dark:border-rose-800/50">
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-rose-900 dark:text-rose-300">Assertion Failed: Element not found</h3>
                    <p className="text-sm text-rose-700/80 dark:text-rose-400/80 mt-2 font-mono bg-white/50 dark:bg-black/20 p-3 rounded-xl border border-rose-100 dark:border-rose-900/30">
                      Expected selector <span className="font-bold text-rose-800 dark:text-rose-300">`#submit-payment-btn`</span> to be visible.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="rounded-2xl border border-indigo-200/80 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:to-purple-950/40 p-1 relative overflow-hidden z-10 shadow-lg shadow-indigo-500/5 group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity blur-xl"></div>
                
                <div className="bg-white/90 dark:bg-[#09090b]/80 backdrop-blur-xl p-6 rounded-xl border border-white/50 dark:border-white/5 relative z-10 h-full">
                  <div className="flex items-start space-x-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0 relative z-10 border border-white/20 shadow-lg">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center">
                          ATA AI Analysis & Auto-Fix
                          <span className="ml-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">99% Confidence</span>
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                        I analyzed the recent DOM changes and commit history. The checkout button ID was updated from <code className="bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-xs border border-slate-200 dark:border-white/5 text-slate-800 dark:text-slate-200 font-mono">#submit-payment-btn</code> to <code className="bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 rounded-md text-xs border border-slate-200 dark:border-white/5 text-indigo-600 dark:text-indigo-400 font-mono font-semibold">#confirm-order-btn</code> by John Doe.
                      </p>
                      <div className="flex space-x-3">
                        <Button className="h-10 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-600/20 transition-all">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Apply Auto-Heal
                        </Button>
                        <Button variant="outline" className="h-10 px-5 rounded-xl font-semibold border-slate-300/80 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200">
                          View DOM Diff
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Logos = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-[#09090b] relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-8 uppercase tracking-[0.2em]">Trusted by innovative engineering teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:opacity-40 dark:hover:opacity-80">
          <span className="text-2xl font-bold tracking-tight">Acme</span>
          <span className="text-2xl font-black tracking-tighter">GlobalTech</span>
          <span className="text-2xl font-semibold">StarkInd</span>
          <span className="text-2xl font-medium tracking-wide">DataFlow</span>
          <span className="text-2xl font-bold">/dev/null</span>
        </div>
      </div>
    </section>
  );
};

const FeaturesList = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-[#111113] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-500/20">
            <Activity className="w-4 h-4" />
            <span>Next-Gen Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            A smarter way to <br className="hidden md:block"/> handle Quality Assurance.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Forget flaky brittle tests and endless maintenance. ATA understands your application like a human tester but works at the speed of software.
          </p>
        </div>

        <div className="space-y-32">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/20">
                <SearchCode className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Autonomous Test Generation</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Provide ATA with your staging URL and credentials. It automatically crawls your application, maps out all user flows, and writes comprehensive Playwright or Cypress tests without any human intervention.
                </p>
              </div>
              <ul className="space-y-4">
                {['Maps complex user journeys automatically', 'Generates readable, standard test code', 'Zero configuration required'].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] flex items-center justify-center relative p-8 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col space-y-4 bg-slate-50/50 dark:bg-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full"></div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>
                  <div className="h-5 w-1/3 bg-slate-200 dark:bg-white/10 rounded-lg animate-pulse" />
                  <div className="h-5 w-full bg-slate-100 dark:bg-white/5 rounded-lg" />
                  <div className="h-5 w-5/6 bg-slate-100 dark:bg-white/5 rounded-lg" />
                  <div className="h-5 w-4/6 bg-slate-100 dark:bg-white/5 rounded-lg" />
                  <div className="h-5 w-full bg-slate-100 dark:bg-white/5 rounded-lg" />
                  <div className="h-5 w-2/3 bg-slate-100 dark:bg-white/5 rounded-lg" />
                  
                  <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                         <Zap className="w-4 h-4 text-white" />
                       </div>
                       <div className="text-sm text-blue-600 dark:text-blue-400 font-bold">Generating E2E suite...</div>
                     </div>
                     <div className="text-xs font-mono text-slate-400">42% complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-white/20">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Intelligent Self-Healing</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  When developers ship UI updates that break selectors, ATA doesn't fail blindly. It analyzes the DOM context, finds the new element, updates the test script, and passes the build.
                </p>
              </div>
              <ul className="space-y-4">
                {['Eliminates test flakiness instantly', 'Adapts to dynamic class names', 'Saves hundreds of hours in maintenance'].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="bg-slate-900 dark:bg-black/90 backdrop-blur-xl rounded-3xl border border-slate-800 dark:border-white/10 shadow-2xl overflow-hidden aspect-square md:aspect-[4/3] flex items-center justify-center relative p-8 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full bg-[#0d1117] rounded-xl border border-slate-800 p-6 font-mono text-sm shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  
                  <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
                    <Code2 className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-400">checkout.spec.ts</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-slate-500 mb-1">{"// Before"}</div>
                      <div className="text-rose-400 bg-rose-500/10 p-2 rounded line-through decoration-rose-400/50">
                        await page.click('.btn-primary.checkout');
                      </div>
                    </div>
                    
                    <div className="flex justify-center my-4">
                      <div className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center">
                        <Sparkles className="w-3 h-3 mr-2" />
                        ATA Auto-Healed
                      </div>
                    </div>

                    <div>
                      <div className="text-slate-500 mb-1">{"// After"}</div>
                      <div className="text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                        await page.click('[data-testid="checkout-submit"]');
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-[#09090b] relative border-t border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-500/20">
            <Activity className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">How it works</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Three simple steps to automate your QA entirely.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0"></div>
           
           {[
             { step: "01", title: "Connect Repository", desc: "Link your GitHub or GitLab repo. ATA automatically detects your framework and environment." },
             { step: "02", title: "AI Generation", desc: "Our engine maps your app's user flows and generates comprehensive E2E tests in Playwright or Cypress." },
             { step: "03", title: "Continuous Testing", desc: "Tests run on every PR. If UI changes break a test, ATA auto-heals the selector and pushes a fix." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: i * 0.2 }}
               className="relative z-10 flex flex-col items-center text-center p-6"
             >
               <div className="w-24 h-24 rounded-full bg-white dark:bg-[#111113] border border-slate-200 dark:border-white/10 shadow-xl flex items-center justify-center mb-6 text-2xl font-black text-indigo-600 dark:text-indigo-400">
                 {item.step}
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
               <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#111113] border-y border-slate-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Loved by engineering teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "ATA caught a critical checkout bug that our manual QA missed right before Black Friday. It paid for itself in one day.", author: "Sarah Jenkins", role: "CTO @ TechFlow" },
            { quote: "We deleted 10,000 lines of brittle Cypress tests. Now ATA just maintains them for us. It feels like magic.", author: "David Chen", role: "Lead SDET @ Acme Corp" },
            { quote: "The self-healing feature alone saves my team 15 hours a week. We can finally focus on shipping features.", author: "Elena Rodriguez", role: "VPE @ StartupX" }
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm"
             >
               <div className="flex space-x-1 mb-6">
                 {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
               </div>
               <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 font-medium leading-relaxed">"{item.quote}"</p>
               <div>
                 <div className="font-bold text-slate-900 dark:text-white">{item.author}</div>
                 <div className="text-sm text-slate-500">{item.role}</div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




const Footer = () => {
  return (
    <footer className="py-16 border-t border-slate-200/50 dark:border-white/10 bg-slate-50 dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
        <div className="col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-sm flex-shrink-0">
              <ShieldAlert className="h-5 w-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight dark:text-white text-slate-900">
              ATA
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-8 leading-relaxed">
            Autonomous QA testing infrastructure for teams that move fast. Ship with confidence.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent shadow-sm flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 cursor-pointer transition-colors font-bold">𝕏</div>
            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent shadow-sm flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 cursor-pointer transition-colors font-bold">in</div>
            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-transparent shadow-sm flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 cursor-pointer transition-colors font-bold">gh</div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Product</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © 2026 ATA Inc. All rights reserved.
        </p>
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
    <div className={`min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/30 dark:selection:text-indigo-100 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#09090b] text-slate-50' : 'bg-white text-slate-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Logos />
        <FeaturesList />
        <HowItWorks />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
