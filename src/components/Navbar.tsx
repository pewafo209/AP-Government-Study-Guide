import React from "react";
import { BookOpen, Scale, FileText, LayoutDashboard, BrainCircuit, GraduationCap, Gavel, PenTool, ClipboardCheck, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }: NavbarProps) {
  const groups = [
    {
      label: "Course Content",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "units", label: "Study Units", icon: BookOpen },
        { id: "documents", label: "Foundational Documents", icon: FileText },
        { id: "cases", label: "Required SCOTUS Cases", icon: Scale },
        { id: "amendments", label: "Constitutional Amendments", icon: Gavel },
      ]
    },
    {
      label: "Exam Prep",
      items: [
        { id: "frq", label: "FRQ Writing Guide", icon: PenTool },
        { id: "study", label: "Practice Flashcards", icon: BrainCircuit },
        { id: "quiz", label: "Comprehensive Mock Quizzes", icon: ClipboardCheck },
      ]
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside id="sidebar" className="fixed top-0 left-0 hidden h-screen w-68 flex-col border-r bg-card px-6 py-10 md:flex">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3 text-primary">
            <GraduationCap className="h-7 w-7" />
            <span className="text-xl font-bold tracking-tight">GOV MASTER</span>
          </div>
        </div>

        <nav className="flex flex-col gap-10 overflow-y-auto custom-scrollbar pr-2">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-4 mb-2">
                {group.label}
              </span>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    id={`sidebar-link-${item.id}`}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 group",
                      activeTab === item.id 
                        ? "bg-primary text-white shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeTab === item.id ? "text-white" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto space-y-6">
           <button 
             onClick={toggleDarkMode}
             className="flex items-center gap-3 w-full rounded-md bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
           >
             {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
             {isDarkMode ? "Light Mode" : "Dark Mode"}
           </button>
           <div className="flex flex-col gap-1 px-4">
             <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Exam Date: 05.05.2026</span>
             <span className="text-[10px] text-muted-foreground">ver 3.0</span>
           </div>
        </div>
      </aside>

      {/* Mobile Nav */}
      <nav id="mobile-nav" className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-around px-1 py-4 overflow-x-auto">
          {groups.flatMap(g => g.items).filter(i => ["dashboard", "units", "study", "quiz"].includes(i.id)).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex flex-col items-center gap-2 transition-all px-2",
                activeTab === item.id ? "text-primary scale-110" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-[9px] font-black uppercase tracking-tighter">{item.label.split(' ')[0]}</span>
            </button>
          ))}
          <button 
            onClick={toggleDarkMode}
            className="flex flex-col items-center gap-2 text-muted-foreground px-2"
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            <span className="text-[9px] font-black uppercase tracking-tighter">Theme</span>
          </button>
        </div>
      </nav>
    </>
  );
}
