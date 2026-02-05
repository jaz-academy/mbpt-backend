import { AppDataSource } from '../data-source';
import { IntroductionContent } from '../../modules/introduction/introduction.entity';
import { content } from '../data/introduction';
import { contentEn } from '../data/introduction.en';

export async function seedIntroduction() {
  const repo = AppDataSource.getRepository(IntroductionContent);

  const rows = [
    {
      segment: 'adult',
      locale: 'id',
      content: content.adult,
    },
    {
      segment: 'kids',
      locale: 'id',
      content: content.kids,
    },
    {
      segment: 'adult',
      locale: 'en',
      content: contentEn.adult,
    },
    {
      segment: 'kids',
      locale: 'en',
      content: contentEn.kids,
    },
  ];

  for (const row of rows) {
    await repo.upsert(row, ['segment', 'locale']);
  }
}
