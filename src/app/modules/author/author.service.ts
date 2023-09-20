import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorDTO } from "src/app/dtos/author.dto";
import { Author } from "src/app/entities/author.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly _authorRepository: Repository<Author>,
    ) {}

    private relations: string[] = ["musics"];

    async find() {
        return await this._authorRepository.find();
    }

    async get(id: number) {
        return await this._authorRepository.findOneOrFail({ where: { id } });
    }

    async create(author: AuthorDTO) {
        return await this._authorRepository.save(this._authorRepository.create(author));
    }

    async update(id: number, data: AuthorDTO) {
        const author = await this._authorRepository.findOneOrFail({ where: { id } });
        this._authorRepository.merge(author, data);
        return await this._authorRepository.save(author);
    }

    async delete(id: number) {
        await this._authorRepository.findOneOrFail({ where: { id } });
        await this._authorRepository.softDelete(id);
    }
}
