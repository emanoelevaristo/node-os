import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRoles1623612824858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'roles',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    }                    
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles');
    }

}
