import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddResultPhone1770162600000 implements MigrationInterface {
  name = 'AddResultPhone1770162600000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "results" ADD COLUMN "phone" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "results" DROP COLUMN "phone"`);
  }
}
