import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "src/app/dtos/user.dto";
import { User } from "src/app/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly _userRepository: Repository<User>,
    ) {}

    async find() {
        return await this._userRepository.find();
    }

    async get(id: number) {
        return await this._userRepository.findOne({ where: { id } });
    }

    async create(user: UserDTO) {
        return await this._userRepository.save(this._userRepository.create(user));
    }

    async update(id: number, data: UserDTO) {
        const user = await this._userRepository.findOne({ where: { id } });
        this._userRepository.merge(user, data);
        return await this._userRepository.save(user);
    }

    async delete(id: number) {
        await this._userRepository.findOne({ where: { id } });
        await this._userRepository.delete(id);
    }
}
