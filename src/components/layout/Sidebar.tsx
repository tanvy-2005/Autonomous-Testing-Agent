import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  FlaskConical,
  FileText,
  Settings,
  PlusCircle,
  ShieldAlert,
  ChevronDown,
  SunMoon,
  LogOut,
  User,
  Check,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const NAV_ITEMS = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/dashboard/projects", icon: FolderKanban },
  { name: "Executions", path: "/dashboard/executions", icon: FlaskConical },
  { name: "Reports", path: "/dashboard/reports", icon: FileText },
  { name: "Agents", path: "/dashboard/agents", icon: Server },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

const RECENT_SESSIONS: { name: string; icon: any; path: string }[] = [];

const PROJECTS = [
  { value: "default", label: "No Projects" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  theme: string;
  toggleTheme: () => void;
  isMobile?: boolean;
}

export default function Sidebar({ isCollapsed, setIsCollapsed, theme, toggleTheme, isMobile }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openProject, setOpenProject] = useState(false);
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  const activePath = location.pathname;

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 72 : 280 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative h-screen flex-col z-40 shrink-0",
        isMobile ? "flex w-full" : "hidden md:flex",
        "bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 transition-colors"
      )}
    >
      {/* Collapse Toggle (Desktop only) */}
      {!isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-6 h-6 w-6 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm z-50 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <PanelLeftOpen className="h-3 w-3" /> : <PanelLeftClose className="h-3 w-3" />}
        </Button>
      )}

      <ScrollArea className="flex-1 w-full overflow-hidden">
        <div className="p-4 flex flex-col gap-6 w-full">
          {/* Logo Area */}
          <div className={cn("flex items-center", isCollapsed ? "justify-center" : "space-x-3 px-2")}>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0 group overflow-hidden">
              <ShieldAlert className="h-4 w-4 text-white relative z-10" />
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="font-bold text-lg tracking-tight dark:text-white text-slate-900 whitespace-nowrap overflow-hidden"
                >
                  ATA
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Project Selector */}
          <div className="px-2 w-full">
            <Popover open={openProject} onOpenChange={setOpenProject}>
              <PopoverTrigger render={<div />}>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openProject}
                  className={cn(
                    "w-full justify-between bg-transparent border-slate-200 dark:border-slate-800 shadow-sm",
                    isCollapsed ? "px-0 justify-center h-10" : "px-3 h-10"
                  )}
                >
                  {isCollapsed ? (
                    <Avatar className="h-5 w-5 rounded-sm">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs rounded-sm">
                        {activeProject.label.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Avatar className="h-5 w-5 rounded-sm shrink-0">
                          <AvatarFallback className="bg-blue-100 text-blue-700 text-[10px] rounded-sm">
                            {activeProject.label.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="truncate text-sm">{activeProject.label}</span>
                      </div>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[240px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search project..." />
                  <CommandList>
                    <CommandEmpty>No project found.</CommandEmpty>
                    <CommandGroup>
                      {PROJECTS.map((project) => (
                         <CommandItem
                          key={project.value}
                          value={project.value}
                          onSelect={(currentValue) => {
                            setActiveProject(PROJECTS.find((p) => p.value === currentValue) || PROJECTS[0]);
                            setOpenProject(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              activeProject.value === project.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {project.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* New Scan CTA */}
          <div className="px-2 w-full">
            <Button
              className={cn(
                "w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-[1px]",
                isCollapsed ? "px-0 justify-center h-10" : "justify-start px-4 h-10"
              )}
            >
              <PlusCircle className={cn("shrink-0", !isCollapsed && "mr-2")} size={isCollapsed ? 20 : 18} />
              {!isCollapsed && <span className="font-semibold whitespace-nowrap">New Scan</span>}
            </Button>
          </div>

          <Separator className="dark:bg-slate-800 bg-slate-200 w-[calc(100%-16px)] mx-auto" />

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-2 w-full">
            {NAV_ITEMS.map((item) => {
              const isActive = activePath.startsWith(item.path);
              
              return (
                <Link key={item.name} to={item.path} className="w-full">
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: isActive 
                        ? theme === 'dark' ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.1)" 
                        : "transparent"
                    }}
                    className={cn(
                      "group relative flex items-center h-10 rounded-lg transition-all duration-200 ease-out cursor-pointer",
                      isCollapsed ? "justify-center px-0" : "px-3",
                      !isActive && "hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200",
                      isActive && "text-blue-700 dark:text-blue-400 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
                    )}
                  >
                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                      />
                    )}
                    
                    <item.icon 
                      size={isCollapsed ? 20 : 18} 
                      className={cn(
                        "shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]",
                        isActive && "scale-110"
                      )} 
                    />
                    
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="ml-3 whitespace-nowrap overflow-hidden"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <Separator className="dark:bg-slate-800 bg-slate-200 w-[calc(100%-16px)] mx-auto" />

          {/* Recent Sessions */}
          <div className="flex flex-col gap-1 px-2 w-full">
             <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-3 pb-2 pt-1"
                >
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Recent Sessions
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {RECENT_SESSIONS.map((session) => (
              <Link key={session.name} to={session.path} className="w-full">
                <div className={cn(
                  "group flex items-center h-8 rounded-md transition-colors cursor-pointer text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200",
                  isCollapsed ? "justify-center px-0" : "px-3"
                )}>
                  <session.icon size={isCollapsed ? 18 : 14} className="shrink-0 transition-transform group-hover:scale-110" />
                  
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="ml-3 text-sm truncate"
                      >
                        {session.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Sticky Section */}
      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4 w-full bg-slate-50/50 dark:bg-[#09090b]/50">
        
        {/* Theme Toggle */}
        <div className={cn("flex", isCollapsed ? "justify-center" : "px-2")}>
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full",
              !isCollapsed && "w-full justify-start px-2 h-9"
            )}
            onClick={toggleTheme}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              {theme === "dark" ? <SunMoon size={isCollapsed ? 20 : 18} /> : <Moon size={isCollapsed ? 20 : 18} />}
            </motion.div>
            {!isCollapsed && <span className="ml-3 text-sm font-medium">Switch Theme</span>}
          </Button>
        </div>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger render={<div />}>
            <Button 
              variant="ghost" 
              className={cn(
                "w-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all",
                isCollapsed ? "h-10 px-0 justify-center" : "h-14 px-2 justify-start"
              )}
            >
              <Avatar className={cn("shrink-0", isCollapsed ? "h-8 w-8" : "h-9 w-9 border border-slate-200 dark:border-slate-700")}>
                <AvatarImage src={user?.avatar || "https://github.com/shadcn.png"} alt={user?.name || "User"} />
                <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase() || "U"}</AvatarFallback>
              </Avatar>
              
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="ml-3 flex flex-col items-start overflow-hidden whitespace-nowrap"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">{user?.name || "User"}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{user?.email || "Frontend Developer"}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56" side="right" sideOffset={16}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/10"
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </motion.aside>
  );
}
