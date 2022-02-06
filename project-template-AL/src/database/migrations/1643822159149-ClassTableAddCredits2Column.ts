import { MigrationInterface, QueryRunner } from "typeorm";

export class ClassTableAddCredits2Column1643822159149 implements MigrationInterface {
  name = 'ClassTableAddCredits2Column1643822159149'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`UQ_0b9024d21bdfba8b1bd1c300eae\` ON \`class\``);
    await queryRunner.query(`DROP INDEX \`UQ_6a2083913f3647b44f205204e36\` ON \`content\``);
    await queryRunner.query(`DROP INDEX \`UQ_0ef25918f0237e68696dee455bd\` ON \`lesson\``);
    await queryRunner.query(`DROP INDEX \`UQ_3d8016e1cb58429474a3c041904\` ON \`student\``);
    await queryRunner.query(`CREATE TABLE \`banana\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bananaName\` varchar(100) NOT NULL, \`bananSpecies\` varchar(255) NOT NULL, \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_At\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    await queryRunner.query(`CREATE TABLE \`teste\` (\`id\` int NOT NULL AUTO_INCREMENT, \`testName\` varchar(100) NOT NULL, \`testDuration\` int NOT NULL, \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_At\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`credits2\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`name\` varchar(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`updated_At\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`deleted_At\` datetime(6) NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`description\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`description\` varchar(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`linkContent\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`linkContent\` varchar(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`deleted_At\` datetime(6) NULL`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`description\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`description\` varchar(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`deleted_At\` datetime(6) NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`name\` varchar(100) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`key\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`key\` varchar(45) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`created_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`updated_At\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`deleted_At\` datetime(6) NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`deleted_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`updated_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`created_At\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`key\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`key\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`student\` ADD \`name\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`deleted_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`updated_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`created_At\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE \`lesson\` DROP COLUMN \`description\``);
    await queryRunner.query(`ALTER TABLE \`lesson\` ADD \`description\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`deleted_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`updated_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`created_At\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`linkContent\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`linkContent\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`content\` DROP COLUMN \`description\``);
    await queryRunner.query(`ALTER TABLE \`content\` ADD \`description\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`deleted_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`deleted_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`updated_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`updated_At\` timestamp(0) NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`created_At\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`created_At\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`name\``);
    await queryRunner.query(`ALTER TABLE \`class\` ADD \`name\` varchar(255) NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`credits2\``);
    await queryRunner.query(`DROP TABLE \`teste\``);
    await queryRunner.query(`DROP TABLE \`banana\``);
    await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_3d8016e1cb58429474a3c041904\` ON \`student\` (\`id\`)`);
    await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_0ef25918f0237e68696dee455bd\` ON \`lesson\` (\`id\`)`);
    await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_6a2083913f3647b44f205204e36\` ON \`content\` (\`id\`)`);
    await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_0b9024d21bdfba8b1bd1c300eae\` ON \`class\` (\`id\`)`);
  }
}

