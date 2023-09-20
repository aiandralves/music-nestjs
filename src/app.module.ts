import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlbumModule } from "./app/modules/album/album.module";
import { AuthorModule } from "./app/modules/author/author.module";
import { MusicModule } from "./app/modules/music/music.module";
import { UserModule } from "./app/modules/user/user.module";
import MysqlDataSource from "./database/datasource";

@Module({
    imports: [TypeOrmModule.forRoot(MysqlDataSource.options), AlbumModule, UserModule, MusicModule, AuthorModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
