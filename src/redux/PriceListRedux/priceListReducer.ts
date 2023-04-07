import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PriceListData = {
    totalPrice: number
}

export const initialState: PriceListData = {
    totalPrice: 0,
}

export const priceDataSlice = createSlice({
    name: 'priceData',
    initialState,
    reducers: {
        checkToCart: (state, action: PayloadAction<number>) => {
            state.totalPrice += action.payload
        },
        uncheckFromCart: (state, action: PayloadAction<number>) => {
            state.totalPrice -= action.payload
        },
    },
})

export const { checkToCart, uncheckFromCart } = priceDataSlice.actions

export default priceDataSlice.reducer
