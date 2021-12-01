import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ResponseUserDto} from "@/utils/api/types";
import {RootState} from "@/redux/store";
import {HYDRATE} from "next-redux-wrapper";


export interface userState {
    data: ResponseUserDto | null
}

const initialState: userState = {
    data: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUserData: (state, action: PayloadAction<ResponseUserDto>) => {
            state.data = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state,action) => {
            return {
                ...state,
               ...action.payload.user
            }
        }
    }
})


export const { setUserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data
export const userReducer = userSlice.reducer