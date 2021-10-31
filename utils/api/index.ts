import axios from "axios";
import {createUserDto, loginUserDto, responseUserDto} from "@/utils/api/types";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export const UserApi = {
    async register(dto: createUserDto) {
        const {data} = await instance.post<createUserDto, {data: responseUserDto }>('/auth/register', dto)
        return data
    },
    async LoginApi(dto: loginUserDto) {
        const {data} = await instance.post<loginUserDto,{data: responseUserDto}>('/auth/login', dto)
        return data
    }
}