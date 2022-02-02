import {MigrationInterface, QueryRunner} from "typeorm";

export class ClassTableAddCreditsColumnFix1643822307583 implements MigrationInterface {
    name = 'ClassTableAddCreditsColumnFix1643822307583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`class\` CHANGE \`credits2\` \`credits\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`class\` CHANGE \`credits\` \`credits2\` int NOT NULL`);
    }

}
