import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Author1694964148673 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "authors",
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
                        length: "60",
                    },
                    {
                        name: "imgUrl",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "bio",
                        type: "text",
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
        await queryRunner.dropTable("authors");
    }
}
