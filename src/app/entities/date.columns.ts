import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class DateColumns {
    @CreateDateColumn()
    createdDate?: Date;

    @UpdateDateColumn({ nullable: true })
    updatedDate?: Date;

    @DeleteDateColumn({ nullable: true })
    deletedDate?: Date;
}
