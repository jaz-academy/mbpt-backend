import { questions } from './questions';
import type { QuestionSeed } from './questions';

type QuestionLocaleData = { adult: QuestionSeed[]; kids: QuestionSeed[] };

const adultOverrides: Record<number, string> = {
  1: 'I feel more motivated when I have a clear picture of my future.',
  2: 'Long-term goals make me stronger during difficult processes.',
  3: 'I find it hard to focus when I do not know my direction.',
  4: 'I often imagine where I will be in the next few years.',
  5: 'Having a life goal gives me more energy every day.',

  6: 'I feel more motivated when I understand the meaning of what I do.',
  7: 'I usually want to know why something matters before doing it.',
  8: 'I am willing to keep trying even without immediate results.',
  9: 'My personal values and principles strongly influence my decisions.',
  10: 'I lose motivation when an activity feels meaningless.',

  11: 'I feel more motivated when there are results I can achieve.',
  12: 'Small goals with quick results make me more productive.',
  13: 'Appreciation or recognition increases my motivation.',
  14: 'I easily lose motivation when results take too long to appear.',
  15: 'Seeing real progress makes me want to keep going.',

  16: 'I become more focused when there is a clear deadline.',
  17: 'Clear rules help me stay disciplined.',
  18: 'I often only take action when there are consequences for not acting.',
  19: 'Deadlines make me work more seriously.',
  20: 'I feel confused when there are no clear rules or boundaries.',
};

const kidsOverrides: Record<number, string> = {
  1: 'I feel excited when I know what I want to be in the future.',
  2: 'Having a dream makes me strong even when learning feels tiring.',
  3: 'I find it hard to focus when I do not know where I am going.',
  4: 'I often imagine myself in the future.',
  5: 'Dreams make me excited every day.',

  6: 'I feel more excited when I know why I have to do something.',
  7: 'I often ask why something is important.',
  8: 'I keep trying even if I do not get a reward right away.',
  9: 'I choose based on what I think is right.',
  10: 'I feel lazy when an activity does not feel important.',

  11: 'I feel happy when I get results from my efforts.',
  12: 'Small goals make me more excited.',
  13: 'I feel happy when my efforts are praised.',
  14: 'I get bored easily when results take too long.',
  15: 'When I see progress, I want to keep going.',

  16: 'I focus better when there is a clear time limit.',
  17: 'Rules help me know what to do.',
  18: 'I only start moving when I am afraid of getting into trouble.',
  19: 'Time limits make me work more seriously.',
  20: 'I feel confused when there are no clear rules.',
};

function applyOverrides(
  source: QuestionSeed[],
  overrides: Record<number, string>,
): QuestionSeed[] {
  return source.map((q) => ({
    ...q,
    text: overrides[q.id] ?? q.text,
  }));
}

// Draft translation: only a subset is translated; others keep Indonesian text.
export const questionsEn: QuestionLocaleData = {
  adult: applyOverrides(questions.adult, adultOverrides),
  kids: applyOverrides(questions.kids, kidsOverrides),
};
