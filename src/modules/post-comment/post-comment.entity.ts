import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";

@Entity()
export class PostComment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    text!: string

    @Column()
    authorId!: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date

    @ManyToOne(type => Post, post => post.comments, { eager: false })
    post: Post
}