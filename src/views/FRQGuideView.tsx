import React from "react";
import { frqRules } from "@/data/apgov";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ChevronRight, PenTool } from "lucide-react";

export default function FRQGuideView() {
  return (
    <div className="space-y-10">
      <header className="space-y-1 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">FRQ Writing Rules</h1>
        <p className="text-sm text-muted-foreground">Detailed strategies for each of the 4 Free Response Questions.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {frqRules.map((rule) => (
          <Card key={rule.id} className="border-border shadow-sm rounded-md bg-card">
            <CardHeader className="bg-muted/10 border-b pb-4 pt-6 px-6 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <PenTool className="h-4 w-4" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{rule.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                {rule.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded border border-border flex items-center justify-center text-xs font-semibold text-muted-foreground bg-muted group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1 space-y-1 pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground text-base">{step.label}</h4>
                        {step.points && <Badge variant="secondary" className="font-medium text-[10px]">{step.points} Point{parseInt(step.points) > 1 ? 's' : ''}</Badge>}
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
