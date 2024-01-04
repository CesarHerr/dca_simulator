import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTrades = createAsyncThunk(
  'trades/fetchTrades',
  async (fetchData) => {
    try {
      const response = await axios.get(
        `https://www.buda.com/api/v2/markets/${fetchData.market}/trades`,
        {
          params: {
            timestamp: fetchData.date,
            limit: 1,
          },
        }
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
);

export default fetchTrades;
