import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MusicDTO } from "src/app/dtos/music.dto";
import { MusicService } from "./music.service";

@Controller("api/v1/music")
export class MusicController {
    constructor(private readonly _musicService: MusicService) {}

    @Get()
    async find() {
        return await this._musicService.find();
    }

    @Get(":id")
    async get(@Param("id", new ParseIntPipe()) id: number) {
        return await this._musicService.get(id);
    }

    @Post()
    async create(@Body() music: MusicDTO) {
        return await this._musicService.create(music);
    }

    @Put(":id")
    async update(@Param("id", new ParseIntPipe()) id: number, @Body() music: MusicDTO) {
        return await this._musicService.update(id, music);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", new ParseIntPipe()) id: number) {
        await this._musicService.delete(id);
    }
}
