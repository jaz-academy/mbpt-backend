import { MigrationInterface, QueryRunner } from 'typeorm';

export class QuestionsLocale1770162400000 implements MigrationInterface {
  name = 'QuestionsLocale1770162400000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "questions" ADD COLUMN "locale" character varying NOT NULL DEFAULT 'id'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "locale"`);
  }
}
