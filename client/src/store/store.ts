import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from './data.api'
import dataSlice from './features/data/dataSlice'

export const store = configureStore({
  reducer: {
    dataReducer: dataSlice,
    [dataApi.reducerPath]:dataApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch