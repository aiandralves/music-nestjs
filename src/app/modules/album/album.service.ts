import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AlbumDTO } from "src/app/dtos/album.dto";
import { Album } from "src/app/entities/album.entity";
import { Repository } from "typeorm";

@Injectable()
export class AlbumService {
    private readonly _logger = new Logger(AlbumService.name);

    constructor(
        @InjectRepository(Album)
        private readonly _albumRepository: Repository<Album>,
    ) {}

    private relations: string[] = ["musics"];

    async find() {
        return await this._albumRepository.find({ relations: this.relations });
    }

    async get(id: number) {
        return await this._albumRepository
            .createQueryBuilder("album")
            .select(["album.id", "album.title", "album.year", "album.gender", "album.coverUrl"])
            .addSelect(["musics.id", "musics.title", "musics.duration"])
            .addSelect(["author.id", "author.name"])
            .innerJoin("album.musics", "musics")
            .innerJoin("album.author", "author")
            .where("album.id = :id", { id })
            .andWhere("album.id = :id", { id })
            .getOne();
    }

    async create(album: AlbumDTO) {
        return await this._albumRepository.save(this._albumRepository.create(album));
    }

    async update(id: number, data: AlbumDTO) {
        const album = await this._albumRepository.findOneOrFail({ where: { id } });
        this._albumRepository.merge(album, data);
        return await this._albumRepository.save(album);
    }

    async delete(id: number) {
        await this._albumRepository.findOneOrFail({ where: { id } });
        await this._albumRepository.softDelete(id);
    }
}
