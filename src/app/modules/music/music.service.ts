import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MusicDTO } from "src/app/dtos/music.dto";
import { Music } from "src/app/entities/music.entity";
import { Repository } from "typeorm";

@Injectable()
export class MusicService {
    private readonly _logger = new Logger(MusicDTO.name);

    constructor(
        @InjectRepository(Music)
        private readonly _musicRepository: Repository<Music>,
    ) {}

    async find() {
        return await this._musicRepository.find();
    }

    async get(id: number) {
        return await this._musicRepository.findOneOrFail({ where: { id } });
    }

    async create(music: MusicDTO) {
        return await this._musicRepository.save(this._musicRepository.create(music));
    }

    async update(id: number, data: MusicDTO) {
        const music = await this._musicRepository.findOneOrFail({ where: { id } });
        this._musicRepository.merge(music, data);
        return await this._musicRepository.save(data);
    }

    async delete(id: number) {
        await this._musicRepository.findOneOrFail({ where: { id } });
        await this._musicRepository.softDelete(id);
    }
}
