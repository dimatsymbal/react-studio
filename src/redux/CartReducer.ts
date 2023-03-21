import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type CartType = {
    [id: number]: number
}

export const initialState: CartType = {}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),

        deleteProductToCart: (state, action) => omit(state, [action.payload]),
    },
})

export const { addProductToCart, deleteProductToCart } = cartSlice.actions

export default cartSlice.reducer
