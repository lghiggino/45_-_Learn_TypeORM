import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContent1643494592102 implements MigrationInterface {

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
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'description',
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
