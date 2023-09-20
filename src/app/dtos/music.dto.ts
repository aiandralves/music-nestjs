import { IsNotEmpty, IsOptional } from "class-validator";

export class MusicDTO {
    @IsOptional()
    id?: number;

    @IsNotEmpty({ message: "Preencha o campo título" })
    title: string;

    @IsNotEmpty({ message: "Preencha o campo duração" })
    duration: string;

    @IsNotEmpty({ message: "Informe o album" })
    albumId: number;
}
