import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseInterceptors,
} from "@nestjs/common";
import { UserDTO } from "src/app/dtos/user.dto";
import { UserService } from "./user.service";

@Controller("api/v1/user")
export class UserController {
    constructor(private readonly _userService: UserService) {}

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    async find() {
        return await this._userService.find();
    }

    @Get(":id")
    @UseInterceptors(ClassSerializerInterceptor)
    async get(@Param("id", new ParseIntPipe()) id: number) {
        return await this._userService.get(id);
    }

    @Post()
    async create(@Body() user: UserDTO) {
        return await this._userService.create(user);
    }

    @Put(":id")
    async update(@Param("id", new ParseIntPipe()) id: number, @Body() user: UserDTO) {
        return await this._userService.update(id, user);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param("id", new ParseIntPipe()) id: number) {
        return await this._userService.delete(id);
    }
}
