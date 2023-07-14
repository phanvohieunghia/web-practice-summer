import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	active: false,
	type: undefined,
	data: undefined,
	callback: undefined,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open: (state, { payload }) => {
			state.active = true;
			state.type = payload.type;
			state.data = payload.data;
			state.callback = payload.callback;
		},
		close: (state) => {
			state.active = false;
		},
	},
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
