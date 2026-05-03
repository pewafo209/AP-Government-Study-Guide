
export interface UserProgress {
  viewedUnits: string[];
  viewedDocs: string[];
  viewedCases: string[];
  viewedAmendments: string[];
  quizScores: { [quizId: string]: number };
  lastStudyDate: string;
}

const STORAGE_KEY = "apgov_master_progress_v1";

const defaultProgress: UserProgress = {
  viewedUnits: [],
  viewedDocs: [],
  viewedCases: [],
  viewedAmendments: [],
  quizScores: {},
  lastStudyDate: new Date().toISOString()
};

export function getProgress(): UserProgress {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultProgress;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function trackContent(type: "units" | "docs" | "cases" | "amendments", id: string) {
  const progress = getProgress();
  const key = `viewed${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof UserProgress;
  const list = progress[key] as string[];
  
  if (!list.includes(id)) {
    (progress[key] as string[]).push(id);
    progress.lastStudyDate = new Date().toISOString();
    saveProgress(progress);
  }
}

export function trackQuiz(quizId: string, score: number) {
  const progress = getProgress();
  const currentBest = progress.quizScores[quizId] || 0;
  if (score > currentBest) {
    progress.quizScores[quizId] = score;
    progress.lastStudyDate = new Date().toISOString();
    saveProgress(progress);
  }
}
