import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersRoles1623614319247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_roles',
                columns: [
                    {
                        name: 'user_id',
                        type: 'varchar',
                    },
                    {
                        name: 'role_id',
                        type: 'varchar',
                    }                    
                ],
            }),
        );

        await queryRunner.createForeignKey("user_roles", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("user_roles", new TableForeignKey({
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("user_roles", 'role_id');
        await queryRunner.dropForeignKey("user_roles", 'user_id');
        await queryRunner.dropTable('user_roles');
    }

}
