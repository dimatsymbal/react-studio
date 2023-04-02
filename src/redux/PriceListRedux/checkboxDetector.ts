import { createSlice } from '@reduxjs/toolkit'

type checkboxProductsType = {
    [id: number]: boolean
}

export const initialState: checkboxProductsType = {
    121: false,
}

export const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState,
    reducers: {
        addCheck: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),

        removeCheck: (state, action) => ({
            ...state,
            [action.payload]: false,
        }),
    },
})

export const { addCheck, removeCheck } = checkboxSlice.actions
export default checkboxSlice.reducer
