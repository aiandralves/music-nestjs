import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1694882735680 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        length: "11",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "18",
                        isNullable: true,
                    },
                    {
                        name: "createdDate",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updatedDate",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "deletedDate",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
