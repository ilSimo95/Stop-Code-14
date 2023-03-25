export interface Album {
    IDutente: number
    id: number
    title: string
}

export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}