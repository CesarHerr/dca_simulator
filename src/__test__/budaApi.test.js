import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { describe, test, expect } from 'vitest';

const mock = new MockAdapter(axios);
const marketId = 'btc-clp';
const url = `https://www.buda.com/api/v2/markets/${marketId}/trades`;

const fetchTrades = async (timestamp) => {
  const response = await axios.get(url, {
    params: {
      timestamp,
      limit: 1,
    },
  });
  return response.data;
};

describe('fetchTrades function', () => {
  test('fetches trades data correctly', async () => {
    const timestamp = 1703246400000;
    const mockedData = {
      trades: {
        market_id: 'BTC-CLP',
        timestamp: '1703246400000',
        last_timestamp: '1703246173843',
        entries: [
          ['1703246173843', '0.00248355', '38122360.0', 'sell', 7800434],
        ],
      },
    };

    mock.onGet(url).reply(200, mockedData);

    const data = await fetchTrades(timestamp);

    expect(data).toEqual(mockedData);
    expect(mock.history.get.length).toBe(1);
    expect(mock.history.get[0].url).toBe(url);
    expect(mock.history.get[0].params).toEqual({ timestamp, limit: 1 });
  });
});

