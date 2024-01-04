import { useDispatch, useSelector } from 'react-redux';
import {
  setStartDate,
  setEndDate,
  setInversion,
  setInversion2,
  setMarket,
} from '../redux/trades/tradeSlice';
import useFetchTradesForDateRange from './custom/useFetchTradesForDateRange';

function FormData() {
  const dispatch = useDispatch();
  const { startDate, endDate, inversion, inversion2, market } = useSelector(
    (state) => state.trades
  );

  // custom hook to fetch the trades for the date range
  const { fetchTradesForDateRange } = useFetchTradesForDateRange();

  // save the start date in the state
  const handleStartDate = (e) => {
    const date = new Date(e.target.value + 'T12:00:00Z');
    dispatch(setStartDate(date.getTime()));
  };

  // save the end date in the state
  const handleEndDate = (e) => {
    const date = new Date(e.target.value + 'T12:00:00Z');
    dispatch(setEndDate(date.getTime()));
  };

  // save the amount in the state
  const handleAmount = (e) => {
    dispatch(setInversion2(Number(e.target.value)));
  };

//save the market to fetch
  const handleMarket = (e) => {
    dispatch(setMarket(e.target.value));
  };

  // fetch the trades for the date range
  const handleSubmit = () => {
    const today = new Date();
    if (
      inversion < 0 ||
      today.getTime() < endDate ||
      today.getTime() < startDate
    ) {
      alert('Ingrese nuevamente los datos');
    } else {
      fetchTradesForDateRange(startDate, endDate, inversion);
      dispatch(setInversion(Number(inversion2)));
    }
  };

  return (
    <form className="flex flex-col mx-auto w-10/12 max-w-[20rem] items-center gap-5  p-5 rounded md:fixed">
      <div className="flex flex-col w-full">
        <label htmlFor="start" className="inline">
          Fecha inicio
        </label>
        <input
          type="month"
          name="start"
          id="start"
          onChange={handleStartDate}
          className="border rounded p-2 arial inline"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="end" className="inline">
          Fecha Termino
        </label>
        <input
          type="month"
          name="end"
          id="end"
          onChange={handleEndDate}
          className="border rounded p-2"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="inversion" className="inline">
          Inversion
        </label>
        <input
          type="number"
          name="inversion"
          id="inversion"
          onChange={handleAmount}
          className="border rounded p-2"
          placeholder={` $ ${Intl.NumberFormat().format(inversion)}`}
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="selection" className="inline">
          Tipo de Moneda
        </label>
        <select name="pets" id="pet-select" onChange={handleMarket}>
          <option value="">{market}</option>
          <option value="btc-clp">BTC</option>
          <option value="eth-clp">ETH</option>
          <option value="ltc-clp">LTC</option>
          <option value="usdc-clp">USDC</option>
        </select>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-gray-100 p-4 w-full rounded hover:bg-slate-200 active:bg-black active:text-white relative -bottom-1"
      >
        Actualizar
      </button>
    </form>
  );
}

export default FormData;
