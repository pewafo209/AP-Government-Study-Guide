import React, { useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { units, foundationalDocuments, scotusCases, amendments } from "@/data/apgov";
import { BookOpen, Scale, FileText, ArrowRight, Calendar, Sparkles, Gavel, PenTool, BrainCircuit } from "lucide-react";
import { getProgress } from "@/lib/progress";

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export default function Dashboard({ setActiveTab }: DashboardProps) {
  const [progress, setProgress] = React.useState(getProgress());

  React.useEffect(() => {
    // Refresh progress when component mounts or activeTab changes
    setProgress(getProgress());
  }, []);

  const masteryPercent = useMemo(() => {
    const totalItems = units.length + foundationalDocuments.length + scotusCases.length + amendments.length;
    const itemsDone = (progress.viewedUnits?.length || 0) + (progress.viewedDocs?.length || 0) + (progress.viewedCases?.length || 0) + (progress.viewedAmendments?.length || 0);
    return Math.round((itemsDone / totalItems) * 100) || 0;
  }, [progress]);

  const daysToExam = useMemo(() => {
    const examDate = new Date("2026-05-05");
    const today = new Date();
    const diff = examDate.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, []);

  return (
    <div className="space-y-12">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            Status: <span className="font-medium text-foreground">{masteryPercent > 50 ? "On Track" : "Early Stages"}</span> • {daysToExam} days until the AP Exam.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Calendar className="h-4 w-4" />
          May 5, 2026
        </div>
      </header>

      <div id="stats" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md border bg-card p-5">
          <div className="text-2xl font-semibold text-primary">{masteryPercent}%</div>
          <div className="text-sm text-muted-foreground mt-1">Course Mastery</div>
        </div>
        <div className="rounded-md border bg-card p-5">
          <div className="text-2xl font-semibold text-foreground">{progress.viewedDocs?.length || 0} / {foundationalDocuments.length}</div>
          <div className="text-sm text-muted-foreground mt-1">Foundational Docs</div>
        </div>
        <div className="rounded-md border bg-card p-5">
          <div className="text-2xl font-semibold text-foreground">{progress.viewedCases?.length || 0} / {scotusCases.length}</div>
          <div className="text-sm text-muted-foreground mt-1">Required Cases</div>
        </div>
        <div className="rounded-md border bg-card p-5">
          <div className="text-2xl font-semibold text-foreground">{progress.viewedAmendments?.length || 0} / 27</div>
          <div className="text-sm text-muted-foreground mt-1">Amendments studied</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border rounded-md shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4 px-6 pt-6">
            <div>
              <CardTitle className="text-lg font-semibold">Curriculum Progress</CardTitle>
              <CardDescription>Review your readiness across core units</CardDescription>
            </div>
            <Button variant="ghost" onClick={() => setActiveTab("units")} className="text-primary hover:text-primary/90 font-medium">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {units.slice(0, 7).map((unit) => {
                const isViewed = progress.viewedUnits.includes(unit.id);
                return (
                  <div key={unit.id} className="flex items-center gap-4 group cursor-pointer hover:bg-muted/50 p-4 px-6 transition-colors" onClick={() => setActiveTab("units")}>
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded border text-sm font-medium ${isViewed ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      {unit.id.padStart(1, '0')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-foreground truncate">{unit.title}</div>
                        <span className="text-xs text-muted-foreground ml-2">{isViewed ? 'Completed' : 'Pending'}</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-500" 
                          style={{ width: isViewed ? '100%' : '5%' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border rounded-md shadow-sm overflow-hidden flex flex-col">
            <div className="bg-primary/5 p-6 flex-1 flex flex-col items-center justify-center text-center border-b">
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Active Recall</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Strengthen your memory with comprehensive flashcard reviews.
              </p>
            </div>
            <Button onClick={() => setActiveTab("study")} variant="default" className="w-full rounded-none h-12 font-medium">
              Start Study Session
            </Button>
          </Card>

          <Card className="border rounded-md shadow-sm overflow-hidden flex flex-col">
             <div className="p-6 flex-1 flex gap-4">
               <div className="h-10 w-10 shrink-0 rounded border bg-muted flex items-center justify-center text-muted-foreground">
                 <PenTool className="h-5 w-5" />
               </div>
               <div>
                 <h4 className="font-semibold text-sm">FRQ Writing Guide</h4>
                 <p className="text-sm text-muted-foreground mt-1">Master the 4 FRQ types with structural blueprints.</p>
               </div>
             </div>
             <Button onClick={() => setActiveTab("frq")} variant="secondary" className="w-full rounded-none h-12 font-medium border-t">
               View Formatting Rules
             </Button>
          </Card>
        </div>
      </div>

      <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Rapid Access Resources</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { id: "documents", label: "Foundational Docs", sub: "9 Core Texts", icon: FileText, color: "text-blue-500", border: "border-blue-500/20" },
              { id: "cases", label: "SCOTUS Tracker", sub: "15 Key Precedents", icon: Scale, color: "text-amber-500", border: "border-amber-500/20" },
              { id: "amendments", label: "Amendments", sub: "27 Constitution Fixes", icon: Gavel, color: "text-emerald-500", border: "border-emerald-500/20" }
            ].map((res) => (
              <div 
                key={res.id}
                onClick={() => setActiveTab(res.id)}
                className={`flex items-center justify-between p-5 rounded-md border bg-card hover:bg-muted/50 transition-colors cursor-pointer group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded shadow-sm border bg-background flex items-center justify-center ${res.color} ${res.border}`}>
                    <res.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{res.label}</div>
                    <div className="text-xs text-muted-foreground">{res.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
}
