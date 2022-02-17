import { MigrationInterface, QueryRunner } from "typeorm";

export class DropClass1645102977923 implements MigrationInterface {
    name = 'DropClass1645102977923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ALTER COLUMN "update_At" SET DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "class"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "duration" integer NOT NULL, "description" character varying(200) DEFAULT null, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "update_At" TIMESTAMP DEFAULT now(), "update_At" TIMESTAMP DEFAULT null, CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name"), CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "class" ALTER COLUMN "update_At" SET DEFAULT null`);
    }



}
