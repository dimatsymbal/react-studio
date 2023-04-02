import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Items } from 'Utils/itemsArrey'

const initialState: Items[] = []

export const fetchItems = createAsyncThunk<Items[], undefined>(
    'boy/fetchItems',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/eb54481b-3d90-40f9-854d-2bfc83ffc7f2'
        )
        return response.data.items
    }
)

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default itemsSlice.reducer
