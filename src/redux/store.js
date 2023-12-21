import { configureStore } from '@reduxjs/toolkit'
import tradeReducer from './trades/tradeSlice'

const store = configureStore({
  reducer: {
    trades: tradeReducer
  }
})

export default store
