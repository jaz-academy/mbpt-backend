import { MigrationInterface, QueryRunner } from 'typeorm';

export class ResultProfiles1770162300000 implements MigrationInterface {
  name = 'ResultProfiles1770162300000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "result_profiles" (
        "id" character varying NOT NULL,
        "label" character varying NOT NULL,
        "isActive" boolean NOT NULL DEFAULT true,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_result_profiles_id" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "result_profile_contents" (
        "id" SERIAL NOT NULL,
        "profileId" character varying NOT NULL,
        "segment" character varying NOT NULL,
        "locale" character varying NOT NULL,
        "content" jsonb NOT NULL,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_result_profile_contents_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_result_profile_contents_profile"
          FOREIGN KEY ("profileId")
          REFERENCES "result_profiles"("id")
          ON DELETE CASCADE
      )
    `);

    await queryRunner.query(`
      CREATE UNIQUE INDEX "UQ_result_profile_contents_profile_segment_locale"
      ON "result_profile_contents" ("profileId", "segment", "locale")
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "UQ_result_profile_contents_profile_segment_locale"`,
    );
    await queryRunner.query(`DROP TABLE "result_profile_contents"`);
    await queryRunner.query(`DROP TABLE "result_profiles"`);
  }
}
