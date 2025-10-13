import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string; emoji: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How are you feeling right now?",
    options: [
      { label: "Chill & Relaxed", value: "chill", emoji: "😌" },
      { label: "Energetic & Fun", value: "energetic", emoji: "🎉" },
      { label: "Romantic & Cozy", value: "romantic", emoji: "💕" },
      { label: "Solo & Peaceful", value: "solo", emoji: "☮️" },
    ],
  },
  {
    id: 2,
    question: "Who are you dining with?",
    options: [
      { label: "Solo Adventure", value: "solo", emoji: "🧘" },
      { label: "With Friends", value: "friends", emoji: "👥" },
      { label: "Date Night", value: "date", emoji: "💑" },
      { label: "Family Time", value: "family", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
  {
    id: 3,
    question: "What's your budget?",
    options: [
      { label: "Budget-Friendly", value: "budget", emoji: "💵" },
      { label: "Mid-Range", value: "mid", emoji: "💰" },
      { label: "Splurge-Worthy", value: "high", emoji: "💎" },
      { label: "Don't Care", value: "any", emoji: "🤷" },
    ],
  },
  {
    id: 4,
    question: "What kind of ambience?",
    options: [
      { label: "Loud & Lively", value: "loud", emoji: "🔊" },
      { label: "Quiet & Intimate", value: "quiet", emoji: "🕯️" },
      { label: "Trendy & Instagram-worthy", value: "trendy", emoji: "📸" },
      { label: "Casual & Comfy", value: "casual", emoji: "🛋️" },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => navigate("/discover"), 500);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 animate-float">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Find Your Vibe
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer a few quick questions to discover your perfect dining spot
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="border-border/50 shadow-card animate-scale-in" key={currentQuestion}>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option.value}
                    variant="outline"
                    className={`h-auto p-6 flex flex-col items-center gap-3 hover:border-primary hover:bg-gradient-card transition-all group ${
                      answers[currentQuestion] === option.value
                        ? "border-primary bg-gradient-card"
                        : ""
                    }`}
                    onClick={() => handleAnswer(option.value)}
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {option.emoji}
                    </span>
                    <span className="text-base font-medium">{option.label}</span>
                  </Button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>

                {answers[currentQuestion] && (
                  <Button
                    className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2"
                    onClick={() => {
                      if (currentQuestion < questions.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      } else {
                        navigate("/discover");
                      }
                    }}
                  >
                    {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
