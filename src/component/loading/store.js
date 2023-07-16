import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	active: false,
}

export const loading = createSlice({
	name: 'loading2',
	initialState,
	reducers: {
		open: (state) => {
			state.active = true
		},
		close: (state) => {
			state.active = false
		},
	},
})
export const { open, close } = loading.actions

export default loading.reducer
