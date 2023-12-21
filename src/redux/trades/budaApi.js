import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const marketId = 'btc-clp'
const url = `https://www.buda.com/api/v2/markets/${marketId}/trades`

const fetchTrades = createAsyncThunk('trades/fetchTrades', async (timestamp) => {
  try {
    const response = await axios.get(url, {
      params: {
        timestamp,
        limit: 1
      }
    })
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
})

export default fetchTrades
