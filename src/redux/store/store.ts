import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from '../features/breeds/breeds.slice'

export const store = configureStore({
  reducer: {
    breeds: breedsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch