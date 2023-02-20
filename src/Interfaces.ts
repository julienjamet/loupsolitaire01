export interface ILink {
    id: number,
    text: string,
    skill?: string | undefined,
    object?: string | undefined,
    gold?: number | undefined,
    fight?: boolean | undefined,
    endurance?: number
}

export interface IParagraph {
    id: number,
    text1: string,
    text2?: string | undefined,
    text3?: string | undefined,
    text4?: string | undefined,
    links: ILink[]
}

export interface IClient {
    id: number,
    skills: string[],
    objects: string[],
    gold: number
}