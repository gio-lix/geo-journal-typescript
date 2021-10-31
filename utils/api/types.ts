export type loginUserDto = {
    email: string,
    password: string
}

export type createUserDto = {
    fullName: string,
} & loginUserDto;

export type responseUserDto = {
    createAt: string,
    email: string,
    fullName: string,
    id: number,
    token: string,
    updateAt: string
}