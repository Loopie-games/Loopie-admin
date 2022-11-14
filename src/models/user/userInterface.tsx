export interface SimpleUserDTO {
    id: string
    username: string
    nickname: string
    profilePicUrl?: string
}

export interface admin extends SimpleUserDTO{
    adminId: string
    id: string
    username: string
    nickname: string
    profilePicUrl?: string
}
