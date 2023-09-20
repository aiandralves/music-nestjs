import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsUrl } from "class-validator";
import { Music } from "../entities/music.entity";
import { GenreEnum } from "../enums/gender.enum";

export class AlbumDTO {
    @IsOptional()
    id?: number;

    @IsNotEmpty({ message: "Preencha o campo título" })
    title: string;

    @IsNotEmpty({ message: "Preencha o campo do ano" })
    year: number;

    @IsNotEmpty({ message: "Preencha o campo gênero" })
    @IsEnum(GenreEnum)
    gender: number;

    @IsOptional()
    @IsUrl()
    coverUrl?: string;

    @IsNotEmpty({ message: "Informe o author" })
    authorId: number;

    @IsArray()
    musics: Music[];
}
