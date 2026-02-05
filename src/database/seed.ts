import { AppDataSource } from './data-source';
import { seedQuestions } from './seeders/question.seed';
import { seedIntroduction } from './seeders/introduction.seed';
import { seedResultProfiles } from './seeders/result-profile.seed';

async function main() {
  await AppDataSource.initialize();
  console.log('🌱 Database initialized');

  await seedQuestions();
  await seedIntroduction();
  await seedResultProfiles();

  console.log('🎉 All seeders finished!');
}

main()
  .catch((error) => {
    console.error('❌ Seeding failed', error);
  })
  .finally(async () => {
    await AppDataSource.destroy();
  });
