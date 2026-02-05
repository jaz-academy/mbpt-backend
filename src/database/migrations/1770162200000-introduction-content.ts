import { MigrationInterface, QueryRunner } from 'typeorm';

export class IntroductionContent1770162200000
  implements MigrationInterface
{
  name = 'IntroductionContent1770162200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "introduction_contents" (
        "id" SERIAL NOT NULL,
        "segment" character varying NOT NULL,
        "locale" character varying NOT NULL,
        "content" jsonb NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_introduction_contents_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_introduction_contents_segment_locale" UNIQUE ("segment", "locale")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "introduction_contents"`);
  }
}
