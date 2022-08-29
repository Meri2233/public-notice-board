import { createSlice } from '@reduxjs/toolkit'

export const noticeSlice = createSlice({
    name: 'allnotices',
    initialState: {
        notices: [],
    },
    reducers: {
        addnotices: (state, action) => {
            state.notices.push(action.payload);
        },
        report: (state, action) => {
            state.notices[action.payload].reports++;
            let reports = state.notices[action.payload].reports;
            if (reports > 3) {
                state.notices.splice(action.payload, 1);
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addnotices, report } = noticeSlice.actions

export default noticeSlice.reducer