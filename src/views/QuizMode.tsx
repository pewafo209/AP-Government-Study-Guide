import React, { useState } from "react";
import { mockQuizzes } from "@/data/apgov";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from "lucide-react";
import { trackQuiz } from "@/lib/progress";
import { cn } from "@/lib/utils";

export default function QuizMode() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = mockQuizzes[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuizzes.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      trackQuiz("general-mock", Math.round((score / mockQuizzes.length) * 100));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResults) {
    const percentage = Math.round((score / mockQuizzes.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/10">
          <Award className="h-12 w-12" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black text-foreground">Quiz Complete!</h2>
          <p className="text-muted-foreground text-lg">You scored {score} out of {mockQuizzes.length}</p>
        </div>
        <div className="text-6xl font-black text-primary bg-primary/5 px-8 pt-8 pb-10 rounded-3xl border-2 border-primary/20">
          {percentage}%
        </div>
        <Button onClick={resetQuiz} className="rounded-2xl px-10 py-6 h-auto text-lg font-bold">
          <RotateCcw className="mr-2 h-5 w-5" /> Retake Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <Badge variant="secondary" className="mb-2 uppercase tracking-widest font-black text-[10px]">
            {currentQuestion.category}
          </Badge>
          <h2 className="text-sm font-bold text-muted-foreground">Question {currentQuestionIndex + 1} of {mockQuizzes.length}</h2>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-border text-sm font-black">
          {score}
        </div>
      </header>

      <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500" 
          style={{ width: `${((currentQuestionIndex + 1) / mockQuizzes.length) * 100}%` }}
        />
      </div>

      <Card className="border-border shadow-xl rounded-2xl overflow-hidden bg-card border-t-8 border-t-primary/20">
        <CardContent className="p-10 space-y-10">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              
              let variantStyle = "bg-background border-border hover:border-primary/50 transition-all";
              if (isAnswered) {
                if (isCorrect) variantStyle = "bg-green-500/10 border-green-500 text-green-600 dark:text-green-400 shadow-md";
                else if (isSelected) variantStyle = "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400 shadow-md";
                else variantStyle = "opacity-50 pointer-events-none";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={cn(
                    "flex items-center justify-between w-full p-6 text-left rounded-xl border-2 font-semibold text-lg transition-all active:scale-[0.98]",
                    variantStyle
                  )}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="h-6 w-6 text-green-500" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="h-6 w-6 text-red-500" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
             <div className="animate-in slide-in-from-bottom-2 duration-300 space-y-6 pt-6 border-t border-dashed">
                <div className="rounded-xl bg-muted/30 p-6">
                   <h4 className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-2">Explanation</h4>
                   <p className="text-muted-foreground leading-relaxed">{currentQuestion.explanation}</p>
                </div>
                <Button onClick={handleNext} className="w-full rounded-xl py-8 h-auto text-xl font-bold font-black group">
                  Next Question <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                </Button>
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
