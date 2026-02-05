import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddResultLocaleSegment1770162700000
  implements MigrationInterface
{
  name = 'AddResultLocaleSegment1770162700000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "results" ADD COLUMN "segment" character varying NOT NULL DEFAULT 'adult'`,
    );
    await queryRunner.query(
      `ALTER TABLE "results" ADD COLUMN "locale" character varying NOT NULL DEFAULT 'id'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "locale"`);
    await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "segment"`);
  }
}
