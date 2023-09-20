import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./author.entity";
import { DateColumns } from "./date.columns";
import { Music } from "./music.entity";

@Entity({ name: "albums" })
export class Album extends DateColumns {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    title: string;

    @Column()
    year: number;

    @Column()
    gender: number;

    @Column({ nullable: true })
    coverUrl?: string;

    @Column()
    authorId: number;

    @ManyToOne(() => Author, (author) => author.albums)
    author: Author;

    @OneToMany(() => Music, (musics) => musics.album, { cascade: true })
    musics: Music[];
}
