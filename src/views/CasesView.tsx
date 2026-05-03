import React, { useState, useEffect } from "react";
import { scotusCases } from "@/data/apgov";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Gavel } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackContent } from "@/lib/progress";

export default function CasesView() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    trackContent("cases", "overview");
  }, []);

  const filteredCases = scotusCases.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.significance.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Required SCOTUS Cases</h1>
          <p className="text-sm text-muted-foreground">The essential judicial precedents for the exam.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="case-search"
            type="text"
            placeholder="Search by name or impact..."
            className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div id="cases-grid" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredCases.map((c) => (
          <Card key={c.id} id={`case-card-${c.id}`} className="group border-border shadow-sm flex flex-col rounded-md overflow-hidden bg-card transition-shadow hover:shadow-md">
            <CardHeader className="pb-4 border-b bg-muted/20 px-6 pt-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="bg-background font-medium text-xs font-mono">{c.year}</Badge>
                <div className="h-8 w-8 rounded border bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                  <Gavel className="h-4 w-4" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors text-foreground">{c.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col gap-6">
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Situation</h4>
                <p className="text-sm leading-relaxed text-foreground/80">{c.situation}</p>
              </div>
              
              <div className="rounded border bg-muted/40 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">The Question</h4>
                <p className="text-sm font-medium text-foreground italic leading-relaxed">"{c.question}"</p>
              </div>

              <div className="mt-auto pt-4 border-t border-border">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Significance</h4>
                <p className="text-sm text-foreground font-medium leading-relaxed">{c.significance}</p>
                {c.constitution && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.constitution.map((item, i) => (
                      <span key={i} className="text-[10px] font-semibold tracking-wide bg-secondary text-secondary-foreground border px-2 py-0.5 rounded-full">{item}</span>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="py-24 text-center space-y-4 rounded-md border border-dashed bg-muted/20">
          <div className="text-muted-foreground text-sm">No cases matched your search</div>
          <Button variant="outline" onClick={() => setSearchTerm("")} className="rounded-md h-9 text-sm">Clear Filters</Button>
        </div>
      )}
    </div>
  );
}
