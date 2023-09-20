import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Album1694481119900 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "albums",
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
                        name: "title",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "year",
                        type: "int",
                        length: "4",
                    },
                    {
                        name: "gender",
                        type: "int",
                        length: "1",
                    },
                    {
                        name: "coverUrl",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "authorId",
                        type: "int",
                        length: "11",
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

        await queryRunner.createForeignKey(
            "albums",
            new TableForeignKey({
                name: "FK_album_author",
                columnNames: ["authorId"],
                referencedTableName: "authors",
                referencedColumnNames: ["id"],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("albums", "FK_album_author");
        await queryRunner.dropTable("albums");
    }
}
