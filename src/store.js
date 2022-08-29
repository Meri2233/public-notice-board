import { configureStore } from '@reduxjs/toolkit'
import noticeReducer from "./slices/noticeSlice"

export default configureStore({
    reducer: {
        notice:noticeReducer,
    },
})