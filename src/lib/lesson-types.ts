export type LessonIllustrationId =
  | "tablets-god"
  | "tablets-neighbor"
  | "tablets-heart"
  | "sacraments-initiation"
  | "sacraments-healing"
  | "sacraments-service"
  | "church-precepts-worship"
  | "church-precepts-charity"
  | "spirit-gifts-wisdom"
  | "spirit-gifts-courage"
  | "capital-sins-pride"
  | "capital-sins-temperance";

export type Teaching = {
  title: string;
  text: string;
  source: string;
  example?: string;
  illustration?: LessonIllustrationId;
};

export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type MatchActivity = {
  type: "match";
  title: string;
  instruction: string;
  pairs: { id: string; left: string; right: string }[];
  explanation: string;
  source: string;
};

export type ClassifyActivity = {
  type: "classify";
  title: string;
  instruction: string;
  categories: [string, string];
  items: { id: string; text: string; category: 0 | 1 }[];
  explanation: string;
  source: string;
};

export type LessonActivity = MatchActivity | ClassifyActivity;

export type Lesson = {
  id: string;
  title: string;
  emoji: string;
  xp: number;
  teachings: Teaching[];
  activities?: LessonActivity[];
  questions: Question[];
};

export type LessonUnit = {
  id: string;
  title: string;
  emoji: string;
  lessons: Lesson[];
};
