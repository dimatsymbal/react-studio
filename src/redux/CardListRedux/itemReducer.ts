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
    reducers: {
        changeSortTypeOnPriceDown: (action) =>
            action.sort((x, y) => x.price - y.price),

        changeSortTypeOnPriceUp: (action) =>
            action.sort((x, y) => y.price - x.price),

        changeSortTypeOnLikesUp: (action) =>
            action.sort((x, y) => y.likes - x.likes),

        changeSortTypeOnLikesDown: (action) =>
            action.sort((x, y) => x.likes - y.likes),

        changeSortTypeOnAlphabet: (action) =>
            action.sort((x, y) => x.title.localeCompare(y.title)),
    },
    extraReducers(builder) {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export const {
    changeSortTypeOnPriceUp,
    changeSortTypeOnPriceDown,
    changeSortTypeOnLikesDown,
    changeSortTypeOnLikesUp,
    changeSortTypeOnAlphabet,
} = itemsSlice.actions
export default itemsSlice.reducer
