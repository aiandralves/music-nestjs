import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "src/app/entities/author.entity";
import { AuthorController } from "./author.controller";
import { AuthorService } from "./author.service";

@Module({
    imports: [TypeOrmModule.forFeature([Author])],
    providers: [AuthorService],
    controllers: [AuthorController],
    exports: [AuthorService],
})
export class AuthorModule {}
