import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "./album.entity";
import { DateColumns } from "./date.columns";

@Entity({ name: "musics" })
export class Music extends DateColumns {
    @PrimaryGeneratedColumn("increment")
    id?: number;

    @Column()
    title: string;

    @Column()
    duration: string;

    @Column()
    albumId: number;

    @ManyToOne(() => Album, (album) => album.musics)
    album?: Album;
}
