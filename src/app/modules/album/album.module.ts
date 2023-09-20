import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Album } from "src/app/entities/album.entity";
import { Music } from "src/app/entities/music.entity";
import { MusicModule } from "../music/music.module";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";

@Module({
    imports: [TypeOrmModule.forFeature([Album, Music]), MusicModule],
    controllers: [AlbumController],
    providers: [AlbumService],
    exports: [AlbumService],
})
export class AlbumModule {}
