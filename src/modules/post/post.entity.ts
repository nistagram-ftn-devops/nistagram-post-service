import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { PostComment } from "../post-comment/post-comment.entity"

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    description?: string

    @Column()
    authorId!: number

    @Column()
    imageId!: number

    @Column({ nullable: true })
    authorUsername: string

    @Column({ nullable: true })
    isPublic: boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @OneToMany(type => PostComment, comment => comment.post, { eager: true , cascade: ['insert', 'update']})
    comments?: PostComment[]
}
