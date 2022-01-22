import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLesson1642724910507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lesson',
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
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'update_At',
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
    await queryRunner.dropTable('lesson');
  }
}
