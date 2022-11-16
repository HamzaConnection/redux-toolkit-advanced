import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisiable: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisiable;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;