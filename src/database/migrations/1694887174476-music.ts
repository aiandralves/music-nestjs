import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Music1694887174476 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "musics",
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
                    },
                    {
                        name: "duration",
                        type: "varchar",
                    },
                    {
                        name: "albumId",
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
            "musics",
            new TableForeignKey({
                name: "FK_music_album",
                columnNames: ["albumId"],
                referencedTableName: "albums",
                referencedColumnNames: ["id"],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("musics", "FK_music_album");
        await queryRunner.dropTable("musics");
    }
}
