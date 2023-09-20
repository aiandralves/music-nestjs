import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Album } from "src/app/entities/album.entity";
import { Music } from "src/app/entities/music.entity";
import { MusicController } from "./music.controller";
import { MusicService } from "./music.service";

@Module({
    imports: [TypeOrmModule.forFeature([Album, Music])],
    providers: [MusicService],
    controllers: [MusicController],
    exports: [MusicService],
})
export class MusicModule {}
