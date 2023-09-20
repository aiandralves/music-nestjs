import * as dotenv from "dotenv";
import { resolve } from "node:path";
import { DataSource } from "typeorm";
dotenv.config();

const MysqlDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [resolve(__dirname, "..", "app", "**", "*.entity{.js,.ts}")],
    migrations: [resolve(__dirname, "..", "database", "migrations", "*.ts")],
    synchronize: false,
});

export default MysqlDataSource;
