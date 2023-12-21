import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import DataTable from './DataTable';
import FormData from './FormData';
import useFetchTradesForDateRange from './custom/useFetchTradesForDateRange';

import LineChart from './LineChart';
import Loader from './Loader';

function Simulator() {
  const { fetchTradesForDateRange } = useFetchTradesForDateRange();
  const { isLoading, startDate, endDate, inversion } = useSelector(
    (state) => state.trades
  );

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchTradesForDateRange(startDate, endDate, inversion)
  }, [])

  return (
    <>
      <h1 className="text-3xl text-center py-10 md:5xl font-extrabold">
        {' '}
        DCA Simulator
      </h1>
      <div className='flex flex-col'>
        <div className="flex flex-col md:flex-row">
          <FormData />
          {isLoading ? '' : <LineChart />}
        </div>
        {isLoading ? <Loader /> : <DataTable />}
      </div>
    </>
  );
}

export default Simulator;
