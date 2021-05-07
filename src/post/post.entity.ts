import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Comment } from "./comment.entity"

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

    @OneToMany(type => Comment, comment => comment.post, { eager: true , cascade: ['insert', 'update']})
    comments?: Comment[]
}
