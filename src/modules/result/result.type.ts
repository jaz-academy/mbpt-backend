export type ResultAnswers = Record<string, unknown>;
export type ResultFuel = 'vision' | 'meaning' | 'validation' | 'fear';
export type ResultScores = Record<ResultFuel, number>;

export interface ResultData {
  answers: ResultAnswers;
  scores: ResultScores;
  profile: string;
  name?: string;
  email?: string;
  phone?: string;
  segment?: string;
  locale?: string;
}
