import {MigrationInterface, QueryRunner} from "typeorm";

export class removedExtraModel1644190242392 implements MigrationInterface {
    name = 'removedExtraModel1644190242392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `class` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `content` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `student` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `teste` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `teste` CHANGE `updated_At` `updated_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `student` CHANGE `updated_At` `updated_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_At` `updated_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `content` CHANGE `updated_At` `updated_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `class` CHANGE `updated_At` `updated_At` datetime(6) NULL");
    }

}
