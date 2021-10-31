import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {responseUserDto} from "@/utils/api/types";
import {RootState} from "@/redux/store";


export interface userState {
    data: responseUserDto | null
}

const initialState: userState = {
    data: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUserData: (state, action: PayloadAction<responseUserDto>) => {
            state.data = action.payload
        },
    },
})

export const { setUserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data

export const userReducer = userSlice.reducer