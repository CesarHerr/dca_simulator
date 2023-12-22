import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import DataTable from '../components/DataTable';
import { describe, test, expect } from 'vitest';
import configureStore from 'redux-mock-store';

describe('DataTable Component', () => {
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
    },
  };

  const mockStore = configureStore([]);

  test('renders DataTable correctly', () => {
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    expect(getByText('Tabla Variación Inversión')).toBeDefined();
    expect(getByText('enero de 2023')).toBeDefined();
    expect(getByText('$ 14,540,000')).toBeDefined();
    expect(getByText('$ 100,000')).toBeDefined();
    expect(getByText('$ 101,000')).toBeDefined();
    expect(getByText('$ 100')).toBeDefined();
    expect(getByText('10.00 %')).toBeDefined();
  });
});
