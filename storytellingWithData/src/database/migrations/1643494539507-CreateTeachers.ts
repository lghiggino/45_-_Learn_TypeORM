import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeachers1643494539507 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'teachers',
            columns: [
              {
                name: 'id',
                type: 'int',
                isNullable: false,
                isPrimary: true,
                isUnique: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'first_name',
                type: 'varchar',
              },
              {
                name: 'last_name',
                type: 'varchar',
              },
              {
                name: 'school',
                type: 'varchar',
              },
              {
                name: 'salary',
                type: 'numeric',
              },
              {
                name: 'hire_date',
                type: 'date',
              },
              {
                name: 'created_At',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_At',
                type: 'timestamp',
                default: 'null',
                isNullable: true,
              },
              {
                name: 'deleted_At',
                type: 'timestamp',
                default: 'null',
                isNullable: true,
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('content');
      }

}
