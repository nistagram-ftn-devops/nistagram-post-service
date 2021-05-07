import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    description?: string

    @Column()
    authorId!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date
}
