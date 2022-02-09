import {MigrationInterface, QueryRunner} from "typeorm";

export class EntityNames1644408187823 implements MigrationInterface {
    name = 'EntityNames1644408187823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `content` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `student` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `teste` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `teste` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `student` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `lesson` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `content` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
    }

}
