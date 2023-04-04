import { createSlice } from '@reduxjs/toolkit'

type PriceListData = {
    totalPrice: number
}

export const initialState: PriceListData = {
    totalPrice: 0,
}

export const priceDataSlice = createSlice({
    name: 'priceData',
    initialState,
    reducers: {},
})

// export const { addProductToCart, deleteProductToCart } = cartSlice.actions

export default priceDataSlice.reducer
