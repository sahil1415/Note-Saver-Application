import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../features/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,  // ✅ 'paste' should match useSelector((state) => state.paste)
  },
})