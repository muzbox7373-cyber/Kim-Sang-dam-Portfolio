export interface HistoryItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}