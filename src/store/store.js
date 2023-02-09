import { configureStore } from "@reduxjs/toolkit";
import { newsSlice } from "./news";


export const store = configureStore({
    reducer: {
        news: newsSlice.reducer
    }
})