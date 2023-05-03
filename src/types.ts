export interface User{
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    createdAt: string
}

export interface Post{
    id: string,
    creatorId: string,
    content: string,
    likes: number,
    dislikes: number,
    createdAt: string,
    updateAt: string
}