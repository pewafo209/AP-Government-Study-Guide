import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import UnitsView from "./views/UnitsView";
import DocumentsView from "./views/DocumentsView";
import CasesView from "./views/CasesView";
import AmendmentsView from "./views/AmendmentsView";
import FRQGuideView from "./views/FRQGuideView";
import StudyMode from "./views/StudyMode";
import QuizMode from "./views/QuizMode";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard setActiveTab={setActiveTab} />;
      case "units":
        return <UnitsView />;
      case "documents":
        return <DocumentsView />;
      case "cases":
        return <CasesView />;
      case "amendments":
        return <AmendmentsView />;
      case "frq":
        return <FRQGuideView />;
      case "study":
        return <StudyMode />;
      case "quiz":
        return <QuizMode />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="mx-auto max-w-7xl pt-4 pb-24 md:pt-12 md:pb-12 md:pl-72 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
