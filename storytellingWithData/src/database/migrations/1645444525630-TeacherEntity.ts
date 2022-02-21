import {MigrationInterface, QueryRunner} from "typeorm";

export class TeacherEntity1645444525630 implements MigrationInterface {
    name = 'TeacherEntity1645444525630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("id" SERIAL NOT NULL, "first_name" character varying(25) NOT NULL, "last_name" character varying(50) NOT NULL, "school" character varying(60) NOT NULL, "salary" integer NOT NULL, "hire_date" TIMESTAMP NOT NULL, "duration" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP DEFAULT now(), "deleted_At" TIMESTAMP, CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ALTER COLUMN "updated_At" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "description" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "linkContent"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "linkContent" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "updated_At" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "updated_At" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "updated_At" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "content" ALTER COLUMN "updated_At" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "linkContent"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "linkContent" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ALTER COLUMN "updated_At" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
