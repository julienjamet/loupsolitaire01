export interface ILink {
    id: number,
    skill?: string | undefined,
    object?: string | undefined,
    gold?: number | undefined,
    fight?: boolean | undefined
}

export interface IParagraph {
    id: number,
    text1: string,
    text2?: string | undefined,
    text3?: string | undefined,
    decision: string,
    links: ILink[]
}

export interface IClient {
    id: number,
    skills: string[],
    objects: string[],
    gold: number
}