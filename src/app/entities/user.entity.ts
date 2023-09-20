import * as bcrypt from "bcrypt";
import { Exclude } from "class-transformer";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateColumns } from "./date.columns";

@Entity({ name: "users" })
export class User extends DateColumns {
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ nullable: true })
    phone?: string;

    @BeforeInsert()
    passwordEncrypt() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}
