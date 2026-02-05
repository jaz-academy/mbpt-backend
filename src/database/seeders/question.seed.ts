import { AppDataSource } from '../data-source';
import { Question } from '../../modules/question/question.entity';
import { questions } from '../data/questions';
import { questionsEn } from '../data/questions.en';

export async function seedQuestions() {
  const repo = AppDataSource.getRepository(Question);
  await repo.clear();

  const rows = [
    ...questions.adult.map((q) => {
      const question = new Question();
      question.segment = 'adult';
      question.text = q.text;
      question.motivation = q.motivation;
      question.weight = q.weight;
      question.order = q.id;
      question.locale = 'id';
      return question;
    }),
    ...questions.kids.map((q) => {
      const question = new Question();
      question.segment = 'kids';
      question.text = q.text;
      question.motivation = q.motivation;
      question.weight = q.weight;
      question.order = q.id;
      question.locale = 'id';
      return question;
    }),
    ...questionsEn.adult.map((q) => {
      const question = new Question();
      question.segment = 'adult';
      question.text = q.text;
      question.motivation = q.motivation;
      question.weight = q.weight;
      question.order = q.id;
      question.locale = 'en';
      return question;
    }),
    ...questionsEn.kids.map((q) => {
      const question = new Question();
      question.segment = 'kids';
      question.text = q.text;
      question.motivation = q.motivation;
      question.weight = q.weight;
      question.order = q.id;
      question.locale = 'en';
      return question;
    }),
  ];

  await repo.save(rows);
  console.log(`✅ Seeded ${rows.length} questions`);
}
