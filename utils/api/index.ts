import axios from "axios";
import {createUserDto, loginUserDto, ResponseUserDto} from "@/utils/api/types";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export const UserApi = {
    async register(dto: createUserDto) {
        const {data} = await instance.post<createUserDto, {data: ResponseUserDto }>('/auth/register', dto)
        return data
    },
    async LoginApi(dto: loginUserDto) {
        const data = await instance.post<loginUserDto,{data: ResponseUserDto}>('/auth/login', dto)
        return data

    },
    async getMe(token: string) {
        const {data} = await instance.get<ResponseUserDto>('/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
}