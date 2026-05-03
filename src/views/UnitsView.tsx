import React, { useState, useEffect } from "react";
import { units } from "@/data/apgov";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { trackContent } from "@/lib/progress";
import { Sparkles } from "lucide-react";

export default function UnitsView() {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);

  useEffect(() => {
    trackContent("units", selectedUnit.id);
  }, [selectedUnit]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start relative max-w-6xl mx-auto">
      <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-8">
        <div className="space-y-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Course Units</h2>
            <p className="text-sm text-muted-foreground">Select a unit to study</p>
          </div>
          <div className="flex flex-col gap-1">
            {units.map((unit) => (
              <button
                key={unit.id}
                id={`unit-select-${unit.id}`}
                onClick={() => setSelectedUnit(unit)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors font-medium text-sm",
                  selectedUnit.id === unit.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:bg-muted"
                )}
              >
                <div className={cn(
                  "font-mono text-xs opacity-60 w-5",
                  selectedUnit.id === unit.id ? "text-primary-foreground" : "text-muted-foreground"
                )}>
                  {unit.id.padStart(2, '0')}
                </div>
                <span className="line-clamp-1 flex-1">{unit.title}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="flex-1 w-full flex flex-col relative z-0">
        <div className="bg-card border rounded-md shadow-sm">
          
          <header id="unit-header" className="p-6 md:p-8 space-y-4 border-b bg-muted/20">
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              Unit {selectedUnit.id}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground leading-tight">{selectedUnit.title}</h1>
          </header>

          <section id="unit-topics" className="p-0 sm:p-2">
            <Accordion type="multiple" defaultValue={selectedUnit.topics.map((_, i) => `topic-${i}`)} className="w-full divide-y">
              {selectedUnit.topics.map((topic, index) => (
                <AccordionItem 
                  key={index} 
                  value={`topic-${index}`} 
                  id={`topic-item-${index}`}
                  className="px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-4 text-foreground">
                    {topic.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 space-y-5">
                    <p className="max-w-[75ch]">{topic.content}</p>
                    {topic.deepDive && (
                      <div className="mt-4 rounded border bg-muted/40 p-5 space-y-2 relative">
                        <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                           Deep Dive
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {topic.deepDive}
                        </p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}
