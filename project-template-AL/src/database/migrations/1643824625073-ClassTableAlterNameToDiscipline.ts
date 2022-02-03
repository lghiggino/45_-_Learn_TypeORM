/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner } from 'typeorm';

export default class ClassTableAlterNameToDiscipline1643824625073 implements MigrationInterface {
  name = 'ClassTableAlterNameToDiscipline1643824625073'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `class` CHANGE `name` `discipline` varchar(100) NOT NULL");
    await queryRunner.query("ALTER TABLE `banana` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `class` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `content` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `student` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
    await queryRunner.query("ALTER TABLE `teste` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT NULL");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `teste` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `student` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `lesson` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `content` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `class` CHANGE `deleted_At` `deleted_At` datetime(6) NULL");
    await queryRunner.query("ALTER TABLE `class` CHANGE `updated_At` `updated_At` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `banana` CHANGE `updated_At` `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    await queryRunner.query("ALTER TABLE `class` CHANGE `discipline` `name` varchar(100) NOT NULL");
  }

}
