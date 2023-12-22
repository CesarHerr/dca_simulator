import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, test, expect, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import FormData from '../components/FormData';
import tradeReducer from '../redux/trades/tradeSlice';

describe('FormData Component', () => {
  const initialState = {
    trades: {
      startDate: null,
      endDate: null,
      inversion: 0,
    },
  };
  
  const store = configureStore({
    reducer: tradeReducer,
    preloadedState: initialState,
  });
  
  vi.mock('../components/custom/useFetchTradesForDateRange', async () => {
    const actualModule = await vi.importActual(
      '../components/custom/useFetchTradesForDateRange'
    );
    return {
      ...actualModule,
      fetchTradesForDateRange: vi.fn(),
    };
  });

  test('FormData renders correctly and handles form actions', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <FormData />
      </Provider>
    );

    fireEvent.change(getByLabelText('Fecha inicio'), {
      target: { value: '2023-01' },
    });
    fireEvent.change(getByLabelText('Fecha Termino'), {
      target: { value: '2023-03' },
    });
    fireEvent.change(getByLabelText('Inversion'), { target: { value: 50000 } });

    fireEvent.click(getByText('Actualizar'));

    const actions = store.getState();
    
    expect(actions).toEqual(
      expect.objectContaining({
        startDate: 1672574400000,
        endDate: 1677672000000,
        inversion: 50000,
      })
    );
  });
});
