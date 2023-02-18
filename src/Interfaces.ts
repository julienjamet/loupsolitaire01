export interface ILink {
    id: number,
    condition?: string | undefined
}

export interface IHTML {
    id: number,
    text1: string,
    text2?: string | undefined,
    text3?: string | undefined,
    decision: string,
    links: ILink[]
}