import { configureStore } from '@reduxjs/toolkit'
import modalSlice from '@/component/modal/store'
import loadingSlice from '@/component/loading/store'

export const store = configureStore({
	reducer: {
		modal: modalSlice,
		loading: loadingSlice,
	},
})
