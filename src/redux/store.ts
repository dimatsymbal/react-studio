import { configureStore } from '@reduxjs/toolkit'
import likeCounter from './LikesOnCards/likeDetector'
import CartReducer from './CardListRedux/CartReducer'
import itemReducer from './CardListRedux/itemReducer'
import checkboxReducer from './PriceListRedux/checkboxDetector'

//ми створили глобальне сховище

export const store = configureStore({
    reducer: {
        productsLikeState: likeCounter,
        productsInCart: CartReducer,
        items: itemReducer,
        checkBoxState: checkboxReducer,
    },
})

//опис типів хуків
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
