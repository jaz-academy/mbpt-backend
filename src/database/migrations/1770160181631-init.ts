import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1770160181631 implements MigrationInterface {
    name = 'Init1770160181631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "results" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "answers" jsonb NOT NULL, "scores" jsonb NOT NULL, "profile" character varying NOT NULL, "name" character varying, "email" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e8f2a9191c61c15b627c117a678" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "segment" character varying NOT NULL, "text" character varying NOT NULL, "motivation" character varying NOT NULL, "weight" integer NOT NULL, "order" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "results"`);
    }

}
