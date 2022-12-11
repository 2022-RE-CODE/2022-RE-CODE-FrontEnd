export type CategoryType = {
    name: string;
}

export type UserType = {
    userId: number;
    nickname: string;
    role: string;
    roles: string;
    position: string;
    gitLink?: any;
    blogLink?: any;
    img?: any;
}

export type PostType = {
    postId: number;
    title: string;
    content: string;
    view: number;
    likes: number;
    createMinutesAgo: string;
    categories: CategoryType[];
    user: UserType;
    comments: any[];
}

export type RootPostObjectType = {
    count: number;
    data: PostType[];
}

export type CommentType = {
    userId: number,
    comment: string,
    nickname: string
}