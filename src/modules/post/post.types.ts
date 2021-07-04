export class CreatePostDto {
    description!: string
    authorId!: number
    imageId!: number
}

export class CreateCommentDto {
    text!: string
    authorId!: number
}
