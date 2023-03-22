import { configureStore } from '@reduxjs/toolkit'
import likeCounter from './likeCounter'
import CartReducer from './CartReducer'
import itemReducer from './itemReducer'

//ми створили глобальне сховище

export const store = configureStore({
    reducer: {
        productsLikeState: likeCounter,
        productsInCart: CartReducer,
        items: itemReducer,
    },
})

//опис типів хуків
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
