import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AuthorDTO } from "src/app/dtos/author.dto";
import { AuthorService } from "./author.service";

@Controller("api/v1/author")
export class AuthorController {
    constructor(private readonly _authorService: AuthorService) {}

    @Get()
    async find() {
        return await this._authorService.find();
    }

    @Get(":id")
    async get(@Param("id", new ParseIntPipe()) id: number) {
        return await this._authorService.get(id);
    }

    @Post()
    async create(@Body() author: AuthorDTO) {
        return await this._authorService.create(author);
    }

    @Put(":id")
    async update(@Param("id", new ParseIntPipe()) id: number, @Body() author: AuthorDTO) {
        return await this._authorService.update(id, author);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", new ParseIntPipe()) id: number) {
        await this._authorService.delete(id);
    }
}
