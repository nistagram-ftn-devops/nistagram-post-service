import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";

@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    userId: number

    @ManyToOne(() => Post)
    post: Post
}