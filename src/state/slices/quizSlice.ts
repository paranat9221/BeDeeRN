import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: { value: [] },
    reducers: {},
});

export const { } = quizSlice.actions;
export default quizSlice.reducer;