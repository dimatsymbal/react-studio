import { configureStore } from '@reduxjs/toolkit'
import likeDetector from './LikesOnCards/likeDetector'
import CartReducer from './CardListRedux/CartReducer'
import itemReducer from './CardListRedux/itemReducer'
import checkboxDetector from './PriceListRedux/checkboxDetector'
import priceListReducer from './PriceListRedux/priceListReducer'

//ми створили глобальне сховище

export const store = configureStore({
    reducer: {
        productsLikeState: likeDetector,
        productsInCart: CartReducer,
        items: itemReducer,
        checkBoxState: checkboxDetector,
        priceData: priceListReducer,
    },
})

//опис типів хуків
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
