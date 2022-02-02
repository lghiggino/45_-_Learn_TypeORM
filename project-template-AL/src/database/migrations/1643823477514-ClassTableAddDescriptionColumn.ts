import {MigrationInterface, QueryRunner} from "typeorm";

export class ClassTableAddDescriptionColumn1643823477514 implements MigrationInterface {
    name = 'ClassTableAddDescriptionColumn1643823477514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`class\` ADD \`description\` varchar(500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`description\``);
    }

}
