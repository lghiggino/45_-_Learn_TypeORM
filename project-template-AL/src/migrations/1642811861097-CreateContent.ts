import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateContent1642811861097 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'content',
        columns: [
          {
            name: 'id',
            type: 'int',
            isNullable: false,
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'descriptiom',
            type: 'varchar',
          },
          {
            name: 'linkContent',
            type: 'varchar',
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_At',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('content');
  }
}
