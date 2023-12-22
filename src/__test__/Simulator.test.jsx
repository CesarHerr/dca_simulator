import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Simulator from '../components/Simulator';
import tradeReducer from '../redux/trades/tradeSlice';
import { describe, test, expect, vi } from 'vitest';

describe('Simulator Component', () => {
  HTMLCanvasElement.prototype.getContext = vi.fn();

  const initialState = {
    trades: {
      dcaData: [
        {
          date: 'enero de 2023',
          timestamp: '1672622364948',
          sumInversion: 100000,
          price: 14540000,
          inversion: 100000,
          portfolio: 101000,
          change: 100,
          percentage: 10,
        },
      ],
      inversion: 50000,
      startDate: new Date('2023-01-01'),
      endDate: new Date('2023-03-01'),
    },
  };

  const store = configureStore({
    reducer: tradeReducer,
    preloadedState: initialState,
  });

  test('renders Simulator component correctly', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Simulator />
      </Provider>
    );

    const titleElements = getAllByText(/DCA Simulator/i);
    const footerDescription = getAllByText(/César Herrera González/i);

    expect(titleElements.length).toBeGreaterThan(0);
    expect(footerDescription).toBeDefined();
  });
});
