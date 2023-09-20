import { IsNotEmpty, IsOptional, IsUrl } from "class-validator";

export class AuthorDTO {
    @IsNotEmpty({ message: "Preencha o campo nome" })
    name: string;

    @IsOptional()
    @IsUrl()
    imgUrl?: string;

    @IsOptional()
    bio?: string;
}
