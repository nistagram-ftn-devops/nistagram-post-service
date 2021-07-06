import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../post/post.entity";
import { RatingType } from "./rating.types";

@Entity()
export class Rating extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Post)
    post: Post

    @Column()
    type: RatingType

    @Column()
    userId: number
}