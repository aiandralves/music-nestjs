import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UserDTO {
    id?: number;

    @IsNotEmpty({ message: "Preencha o campo nome" })
    name: string;

    @IsNotEmpty({ message: "Preencha o campo e-mail" })
    @IsEmail({}, { message: "Informe um e-mail válido" })
    email: string;

    @IsNotEmpty({ message: "Preencha o campo senha" })
    password: string;

    @IsOptional()
    phone?: string;
}
