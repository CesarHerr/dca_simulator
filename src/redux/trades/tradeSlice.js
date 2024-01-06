import { createSlice } from '@reduxjs/toolkit';
import fetchTrades from './budaApi';

let today = new Date();
today.setDate(1);
today.setUTCHours(12, 0, 0, 0);
today = today.getTime();

let yearAgo = new Date(today);
yearAgo.setMonth(yearAgo.getMonth() - 11);
yearAgo.setUTCHours(12, 0, 0, 0);
yearAgo = yearAgo.getTime();

const initialState = {
  error: null,
  isLoading: false,
  startDate: yearAgo,
  endDate: today,
  dcaData: [],
  inversion: 100000,
  inversion2: 0,
  market: 'btc-clp',
};

const tradeSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setDcaData: (state, action) => {
      state.dcaData = action.payload;
    },
    setInversion: (state, action) => {
      state.inversion = action.payload;
    },
    setInversion2: (state, action) => {
      state.inversion2 = action.payload;
    },
    setMarket: (state, action) => {
      state.market = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trades = action.payload.trades;
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setStartDate,
  setEndDate,
  setDcaData,
  setInversion,
  setInversion2,
  setMarket,
} = tradeSlice.actions;
export default tradeSlice.reducer;
