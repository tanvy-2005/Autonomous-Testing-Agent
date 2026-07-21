import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Menu,
  X,
  Moon,
  Sun,
  ShieldCheck,
  CheckCircle2,
  GitPullRequest,
  Zap,
  LayoutDashboard,
  SearchCode,
  Activity
} from "lucide-react";

const Navbar = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? "bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800" 
          : "bg-white dark:bg-[#09090b] border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" fill="currentColor" />
          </div>
          <span className="font-bold text-xl tracking-tight dark:text-white text-slate-900">ATA</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "Use Cases", "Pricing", "Company"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={toggleTheme} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link to="/login" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
            Log in
          </Link>
          <Link to="/signup">
            <Button className="h-9 px-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-colors">
              Start free
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-slate-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-slate-800"
          >
            <div className="p-6 flex flex-col space-y-4">
              {["Features", "Use Cases", "Pricing", "Company"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-4">
                <Link to="/login" className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Log in
                </Link>
                <Link to="/signup">
                  <Button className="w-full h-10 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                    Start free
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
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative overflow-hidden bg-white dark:bg-[#09090b]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
        >
          Your AI QA Engineer. <br className="hidden md:block"/>
          <span className="text-blue-600 dark:text-blue-500">Ready to test.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          ATA writes, executes, and self-heals end-to-end tests for your entire application. Catch bugs before they reach your users without lifting a finger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/signup">
            <Button className="h-12 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all">
              Get started for free
            </Button>
          </Link>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-sm text-slate-500 dark:text-slate-500"
        >
          No credit card required. Free 14-day trial.
        </motion.p>
      </div>

      {/* Hero Workspace Image / Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 max-w-6xl mx-auto relative z-10"
      >
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111113] shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Mockup Header */}
          <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 bg-slate-50 dark:bg-[#18181b] justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs font-semibold text-slate-500 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-md">Project: Acme Web</span>
            </div>
          </div>
          
          {/* Mockup Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#09090b] p-4 hidden md:block">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Test Suites</h4>
                  <div className="space-y-2">
                    {['Authentication Flow', 'Checkout Process', 'User Settings', 'API Endpoints'].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between text-sm p-2 rounded-md ${i === 1 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'}`}>
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className={`w-4 h-4 ${i === 1 ? 'text-red-500' : 'text-emerald-500'}`} />
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-8 bg-white dark:bg-[#09090b] overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Checkout Process</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Failed 2 minutes ago on branch <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">feature/new-cart</span></p>
                </div>
                <Button className="h-8 text-xs bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900">
                  Rerun Test
                </Button>
              </div>

              <div className="rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10 p-5 mb-6">
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-red-900 dark:text-red-300">Assertion Failed: Element not found</h3>
                    <p className="text-sm text-red-700 dark:text-red-400/80 mt-1 font-mono">Expected selector `#submit-payment-btn` to be visible.</p>
                  </div>
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="rounded-lg border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/10 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">ATA Analysis & Fix</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      I noticed the checkout button ID was changed from <code className="bg-white dark:bg-slate-800 px-1 rounded text-xs border border-slate-200 dark:border-slate-700">#submit-payment-btn</code> to <code className="bg-white dark:bg-slate-800 px-1 rounded text-xs border border-slate-200 dark:border-slate-700">#confirm-order-btn</code> in a recent commit by John. I can automatically update the test selector and heal this test.
                    </p>
                    <div className="flex space-x-3">
                      <Button className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white px-4">Apply Auto-Heal</Button>
                      <Button variant="outline" className="h-8 text-xs px-4 border-slate-300 dark:border-slate-700 dark:text-slate-300">View DOM Snapshot</Button>
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
    <section className="py-10 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by elite engineering teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale dark:invert">
          {/* Simple text placeholders for logos, looking extremely clean */}
          <span className="text-xl font-bold font-serif tracking-tight">Acme</span>
          <span className="text-xl font-black tracking-tighter">GlobalTech</span>
          <span className="text-xl font-semibold">StarkInd</span>
          <span className="text-xl font-medium tracking-wide">DataFlow</span>
          <span className="text-xl font-bold font-mono">/dev/null</span>
        </div>
      </div>
    </section>
  );
};

const FeaturesList = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            A smarter way to handle QA.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Forget flaky brittle tests and endless maintenance. ATA understands your application like a human tester but works at the speed of software.
          </p>
        </div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <SearchCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Autonomous Test Generation</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Provide ATA with your staging URL and credentials. It automatically crawls your application, maps out all user flows, and writes comprehensive Playwright or Cypress tests without any human intervention.
              </p>
              <ul className="space-y-3 mt-4">
                {['Maps complex user journeys automatically', 'Generates readable, standard test code', 'Zero configuration required'].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
              {/* Abstract Representation */}
              <div className="w-3/4 h-3/4 border border-slate-100 dark:border-slate-800 rounded-lg p-6 flex flex-col space-y-4">
                <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-slate-100 dark:bg-slate-800/50 rounded" />
                <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-800/50 rounded" />
                <div className="h-4 w-4/6 bg-slate-100 dark:bg-slate-800/50 rounded" />
                <div className="mt-auto flex items-center space-x-2">
                   <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"><Zap className="w-3 h-3 text-white" /></div>
                   <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Generating suite...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Intelligent Self-Healing</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When developers ship UI updates that break selectors, ATA doesn't fail blindly. It analyzes the DOM context, finds the new element, updates the test script, and passes the build.
              </p>
              <ul className="space-y-3 mt-4">
                {['Eliminates test flakiness instantly', 'Adapts to dynamic class names', 'Saves hundreds of hours in maintenance'].map((text, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="w-3/4 bg-slate-50 dark:bg-[#18181b] rounded-lg border border-slate-200 dark:border-slate-800 p-4 font-mono text-sm shadow-sm">
                <div className="text-slate-400 dark:text-slate-500 mb-2">// Before</div>
                <div className="text-red-600 dark:text-red-400 line-through decoration-red-300 dark:decoration-red-800 mb-4">
                  await page.click('.btn-primary.checkout');
                </div>
                <div className="text-slate-400 dark:text-slate-500 mb-2">// Auto-Healed by ATA</div>
                <div className="text-emerald-600 dark:text-emerald-400">
                  await page.click('[data-testid="checkout-submit"]');
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#09090b] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Ready to automate your testing?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Start your free trial today. It takes less than 2 minutes to run your first autonomous test suite.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button className="h-12 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm">
              Get started for free
            </Button>
          </Link>
          <Button variant="outline" className="h-12 px-8 rounded-md font-semibold text-base border-slate-200 dark:border-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" fill="currentColor" />
            </div>
            <span className="font-bold text-lg tracking-tight dark:text-white text-slate-900">ATA</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs mb-6">
            Autonomous QA testing infrastructure for teams that move fast.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © 2026 ATA Inc. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Integrations</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/30 dark:selection:text-blue-100 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#09090b] text-slate-50' : 'bg-white text-slate-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Logos />
        <FeaturesList />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
