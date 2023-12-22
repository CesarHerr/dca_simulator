import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LineChart from '../components/LineChart';
import { describe, test, beforeEach, expect, vi } from 'vitest';

describe('LineChart Component', () => {
  HTMLCanvasElement.prototype.getContext = vi.fn();
  const mockStore = configureStore([]);
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
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders LineChart component correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <LineChart />
      </Provider>
    );

    

    const chart = container.querySelector('canvas'); // Ajusta según la estructura del gráfico
    expect(chart).not.toBeNull();
  });
});
