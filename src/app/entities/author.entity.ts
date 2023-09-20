import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "./album.entity";
import { DateColumns } from "./date.columns";

@Entity({ name: "authors" })
export class Author extends DateColumns {
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    imgUrl?: string;

    @Column({ type: "text", nullable: true })
    bio?: string;

    @OneToMany(() => Album, (album) => album.author)
    albums: Album[];
}
