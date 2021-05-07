export class CreatePostDto {
    description!: string
    authorId!: number
}

export class CreateCommentDto {
    text!: string
    authorId!: number
}
