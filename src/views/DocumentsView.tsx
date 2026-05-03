import React from "react";
import { foundationalDocuments } from "@/data/apgov";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Quote } from "lucide-react";
import { trackContent } from "@/lib/progress";

export default function DocumentsView() {
  React.useEffect(() => {
    trackContent("docs", "overview");
  }, []);
  return (
    <div className="space-y-10">
      <header className="space-y-1 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Foundational Documents</h1>
        <p className="text-sm text-muted-foreground">The primary sources that shaped American democracy.</p>
      </header>

      <div id="docs-grid" className="grid grid-cols-1 gap-6">
        {foundationalDocuments.map((doc) => (
          <Card key={doc.id} id={`doc-card-${doc.id}`} className="border-border shadow-sm rounded-md overflow-hidden bg-card">
            <CardHeader className="bg-muted/10 border-b pb-6 pt-6 px-6 sm:px-8 group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-medium text-xs">{doc.year || "1787"}</Badge>
                  {doc.author && <span className="text-xs font-medium text-muted-foreground">By {doc.author}</span>}
                </div>
                <CardTitle className="text-2xl font-semibold tracking-tight mt-1 text-foreground group-hover:text-primary transition-colors">{doc.name}</CardTitle>
                <CardDescription className="text-sm text-foreground/80 mt-2 leading-relaxed max-w-4xl">
                  {doc.summary}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-8">
              {doc.parts && (
                <div id={`doc-parts-${doc.id}`}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Structure & Sections</h3>
                  <div className="flex flex-wrap gap-2">
                    {doc.parts.map((part, i) => (
                      <Badge key={i} variant="secondary" className="font-medium text-xs">{part}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {doc.quotes && (
                <div id={`doc-quotes-${doc.id}`} className="space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Essential Quotes</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {doc.quotes.map((q, i) => (
                      <div key={i} className="group relative rounded border border-border bg-card p-5 transition-shadow hover:shadow-sm">
                        <Quote className="h-4 w-4 text-primary/40 mb-3 absolute top-5 left-5" />
                        <p className="text-base font-medium italic leading-relaxed text-foreground mb-4 pl-8">"{q.quote}"</p>
                        <div className="border-t border-border pt-3">
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            <span className="font-semibold text-foreground mr-1">Significance:</span> {q.explanation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
