import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClass1643494584589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'class',
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
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'duration',
                type: 'integer',
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
        await queryRunner.dropTable('class');
      }

}
