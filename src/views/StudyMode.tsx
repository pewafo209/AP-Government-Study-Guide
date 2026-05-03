import React, { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { units, foundationalDocuments, scotusCases } from "@/data/apgov";
import { motion, AnimatePresence } from "motion/react";
import { RotateCcw, ArrowLeft, ArrowRight, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackContent } from "@/lib/progress";

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function StudyMode() {
  const [activeSet, setActiveTab] = useState<"units" | "docs" | "cases">("units");
  
  const flashcards: Flashcard[] = useMemo(() => {
    if (activeSet === "units") {
      return units.flatMap(u => u.topics.map((t, i) => ({
        id: `${u.id}-${i}`,
        question: `Unit ${u.id}: ${t.title}`,
        answer: t.content,
        category: `Unit ${u.id}`
      })));
    } else if (activeSet === "docs") {
      return foundationalDocuments.map(d => ({
        id: d.id,
        question: `Foundational Doc: ${d.name}`,
        answer: d.summary,
        category: "Documents"
      }));
    } else {
      return scotusCases.map(c => ({
        id: c.id,
        question: `SCOTUS Case: ${c.name} (${c.year})`,
        answer: `Holding: ${c.opinion}\n\nSignificance: ${c.significance}`,
        category: "SCOTUS"
      }));
    }
  }, [activeSet]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  useEffect(() => {
    if (activeSet === "docs") trackContent("docs", currentCard.id);
    if (activeSet === "cases") trackContent("cases", currentCard.id);
    if (activeSet === "units") trackContent("units", currentCard.id.split('-')[0]);
  }, [currentIndex, activeSet, currentCard]);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="space-y-6 flex flex-col items-center max-w-3xl mx-auto py-8">
      <header className="text-center space-y-4 w-full">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Study Mode</h1>
          <p className="text-sm text-muted-foreground">Test your knowledge with active recall.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {[
            { id: "units", label: "Unit Content" },
            { id: "docs", label: "Foundational Docs" },
            { id: "cases", label: "SCOTUS Cases" }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeSet === tab.id ? "default" : "outline"}
              onClick={() => {
                setActiveTab(tab.id as any);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={cn(
                "rounded-md px-5 h-9 font-medium text-sm transition-colors shadow-none",
              )}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </header>

      <div className="w-full">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{currentCard.category}</span>
          <span className="text-xs font-medium text-muted-foreground">
            Card {currentIndex + 1} of {flashcards.length}
          </span>
        </div>

        <div className="relative h-[24rem] w-full [perspective:1000px] group">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSet}-${currentIndex}-${isFlipped}`}
              initial={{ rotateY: isFlipped ? -5 : 5, opacity: 0, scale: 0.98 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: isFlipped ? 5 : -5, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative h-full w-full cursor-pointer select-none"
            >
              <Card className="h-full w-full flex items-center justify-center p-8 bg-card border shadow-sm hover:shadow transition-shadow rounded-md overflow-hidden relative">
                <CardContent className="p-0 flex flex-col items-center justify-center h-full w-full">
                  <div className={cn(
                    "w-full transition-all duration-300 max-w-prose",
                    isFlipped 
                      ? "text-base text-foreground font-medium leading-relaxed overflow-y-auto px-2 custom-scrollbar text-left max-h-[18rem]" 
                      : "text-2xl font-semibold tracking-tight text-foreground text-center"
                  )}>
                    {isFlipped ? (
                      <div className="whitespace-pre-wrap">{currentCard.answer}</div>
                    ) : (
                      currentCard.question
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 text-xs font-medium text-muted-foreground text-center w-full">
                    {isFlipped ? "Click to flip back" : "Click to reveal answer"}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrev} 
            className="rounded-md h-10 px-4 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => {
              setCurrentIndex(Math.floor(Math.random() * flashcards.length));
              setIsFlipped(false);
            }} 
            className="font-medium text-sm text-foreground hover:bg-muted h-10 px-4 rounded-md"
          >
            <RotateCcw className="h-4 w-4 mr-2" /> Shuffle
          </Button>

          <Button 
            variant="default" 
            onClick={handleNext} 
            className="rounded-md h-10 px-4 font-medium shadow-sm"
          >
            Next <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
