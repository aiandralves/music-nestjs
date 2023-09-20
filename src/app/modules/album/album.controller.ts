import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AlbumDTO } from "src/app/dtos/album.dto";
import { AlbumService } from "./album.service";

@Controller("api/v1/album")
export class AlbumController {
    constructor(private readonly _albumService: AlbumService) {}

    @Get()
    async find() {
        return await this._albumService.find();
    }

    @Get(":id")
    async get(@Param("id", new ParseIntPipe()) id: number) {
        return await this._albumService.get(id);
    }

    @Post()
    async create(@Body() album: AlbumDTO) {
        return await this._albumService.create(album);
    }

    @Put(":id")
    async update(@Param("id", new ParseIntPipe()) id: number, @Body() album: AlbumDTO) {
        return await this._albumService.update(id, album);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", new ParseIntPipe()) id: number) {
        await this._albumService.delete(id);
    }
}
