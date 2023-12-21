import { createSlice } from '@reduxjs/toolkit'
import fetchTrades from './budaApi'

const today = new Date().getTime()
let yearAgo = new Date(today)
yearAgo.setMonth(yearAgo.getMonth() - 11)
yearAgo = yearAgo.getTime()

const initialState = {
  trades: [],
  error: null,
  isLoading: false,
  startDate: yearAgo,
  endDate: today,
  dcaData: [],
  inversion: 100000
}

const tradeSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
    setDcaData: (state, action) => {
      state.dcaData = action.payload
    },
    setInversion: (state, action) => {
      state.inversion = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrades.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.isLoading = false
        state.trades = action.payload.trades
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const { setStartDate, setEndDate, setDcaData, setInversion } = tradeSlice.actions
export default tradeSlice.reducer
