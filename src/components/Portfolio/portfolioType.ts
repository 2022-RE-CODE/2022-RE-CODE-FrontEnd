type EnumPositionType = {
    [key: string]: string
    FRONT: string
    BACK: string
}

type LinksType = {
    links: {
        linkId: number,
        userId: number,
        title: string,
        url: string
    }
}

export type PortfolioType = {
    userId: number,
    nickname: string,
    role: string,
    roles: string,
    position: EnumPositionType,
    gitLink: string,
    blogLink: string,
    img: string,
    links: LinksType[]
}

export type LinkType = {
    linkId: number,
    title: string,
    url: string,
    user: {
        userId: number,
        nickname: string,
        role: string,
        roles: string,
        position: EnumPositionType,
        gitLink: string,
        blogLink: string,
        img: string
    },
    updatedAt: string
};