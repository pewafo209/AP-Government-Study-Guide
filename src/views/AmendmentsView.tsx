import React, { useEffect } from "react";
import { amendments } from "@/data/apgov";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Gavel } from "lucide-react";
import { trackContent } from "@/lib/progress";

export default function AmendmentsView() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filtered = amendments.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.number.includes(searchTerm)
  );

  useEffect(() => {
    // Track overall entry to view
    trackContent("amendments", "all");
  }, []);

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">The 27 Amendments</h1>
          <p className="text-sm text-muted-foreground">The formal changes to the US Constitution.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search number or title..."
            className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Card key={a.number} className="group border-border hover:border-primary/50 transition-colors shadow-sm flex flex-col rounded-md overflow-hidden bg-card">
            <CardHeader className="pb-4 border-b bg-muted/20">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded border bg-primary/10 text-primary font-semibold font-mono text-sm tracking-tighter">
                  {a.number}
                </div>
                <Badge variant="outline" className="bg-background font-medium text-xs">{a.year}</Badge>
              </div>
              <CardTitle className="text-base font-semibold leading-tight mt-3 text-foreground group-hover:text-primary transition-colors">{a.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 flex-1">
              <p className="text-sm text-foreground/80 leading-relaxed">
                {a.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
